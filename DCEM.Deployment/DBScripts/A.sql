USE [LOE]
GO

/****** Object:  StoredProcedure [dbo].[usp_GrantPointForCrmMemberCitySaver]    Script Date: 2019/11/29 22:06:13 ******/
DROP PROCEDURE [dbo].[usp_GrantPointForCrmMemberCitySaver]
GO

/****** Object:  StoredProcedure [dbo].[usp_GrantPointForCrmMemberCitySaver]    Script Date: 2019/11/29 22:06:24 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



-- =============================================
-- Author:      Gerald Lo
-- Create Date: 29-05-2019
-- Description: Grant Point and Update Record
--              for CRM_Member_CitySaver
-- =============================================

CREATE PROCEDURE [dbo].[usp_GrantPointForCrmMemberCitySaver]
(
    -- debug flag
    @IsDebug                       BIT,
    --loyalty programme
    @CSBufferDays                  INT,
    @CS2ndAttemptAllowDays         INT,
    @CSLastAttemptAllowDays        INT,
    @CitySaverMaximumReceiptUpload INT,
    --crm member CitySaver
    @CitySaverID                   BIGINT,
    --promotion rule
    @PromotionRuleID               INT
)
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

    -- control variable
    DECLARE @CurrentDate     DATE         = CONVERT(date, DATEADD(hour, 8, SYSUTCDATETIME()));
    DECLARE @CurrentDateTime DATETIME2(7) = SYSUTCDATETIME();

    -- promotion rule
    DECLARE @PR_PromotionRuleID     INT;
    DECLARE @PR_PromotionCampaignID INT;
    DECLARE @PR_MultiplyFixed       INT;            -- 1:multiply | 2:fixed
    DECLARE @PR_PointMultiplier     DECIMAL(16, 2);
    DECLARE @PR_FixedPoint          DECIMAL(16, 2);
    DECLARE @PR_StartTime           DATETIME2(7);
    DECLARE @PR_EndTime             DATETIME2(7);

    SELECT
        @PR_PromotionRuleID     = PromotionRuleID,
        @PR_PromotionCampaignID = PromotionCampaignID,
        @PR_MultiplyFixed       = MultiplyFixed,
        @PR_PointMultiplier     = PointMultiplier,
        @PR_FixedPoint          = FixedPoint,
        @PR_StartTime           = CONVERT(date, DATEADD(hour, 8, StartTime)),
        @PR_EndTime             = CONVERT(date, DATEADD(hour, 8, EndTime))
    FROM CRM_Promotion_Rule
    WHERE PromotionRuleID = @PromotionRuleID

    --promotion campaign
    DECLARE @PC_PromotionCampaignID    INT;
    DECLARE @PC_CampaignName           NVARCHAR(100);
    DECLARE @PC_CampaignNameTC         NVARCHAR(100);
    DECLARE @PC_PointTransactionDescEN NVARCHAR(100);
    DECLARE @PC_PointTransactionDescTC NVARCHAR(100);

    SELECT
        @PC_PromotionCampaignID    = PromotionCampaignID,
        @PC_CampaignName           = CampaignName,
        @PC_CampaignNameTC         = CampaignNameTC,
        @PC_PointTransactionDescEN = PointTransactionDescEN,
        @PC_PointTransactionDescTC = PointTransactionDescTC
    FROM CRM_Promotion_Campaign
    WHERE PromotionCampaignID = @PR_PromotionCampaignID

    --member CitySaver
    DECLARE @MCS_MemberID             INT;
    DECLARE @MCS_CitySaverNo          NVARCHAR(50);
    DECLARE @MCS_PurchaseDate         DATE;
    DECLARE @MCS_TrxStatus            INT;
    DECLARE @MCS_AttemptNo            INT;
    DECLARE @MCS_LastAttemptDate      DATETIME2(7);
    DECLARE @MCS_RecycleCount         INT;
    DECLARE @MCS_RegDate              DATE;
    DECLARE @MCS_SubmitDate           DATE;
    DECLARE @MCS_SubmitTime           DATETIME2(7);
    DECLARE @MCS_ReasonCode           INT;
    DECLARE @MCS_ReplacedCitySaverNo  NVARCHAR(50);
    DECLARE @MCS_ReplacedRecycleCount INT;
    DECLARE @MCS_ProcessDate          DATE;
    DECLARE @UPDRecycleCount int;

    SELECT
        @MCS_MemberID             = MemberID,
        @MCS_CitySaverNo          = CitySaverNo,
        @MCS_PurchaseDate         = PurchaseDate,
        @MCS_TrxStatus            = TrxStatus,
        @MCS_AttemptNo            = AttemptNo,
        @MCS_LastAttemptDate      = LastAttemptDate,
        @MCS_RecycleCount         = RecycleCount,
        @MCS_RegDate              = RegDate,
        @MCS_SubmitDate           = SubmitDate,
        @MCS_SubmitTime           = SubmitTime,
        @MCS_ReasonCode           = ReasonCode,
        @MCS_ReplacedCitySaverNo  = ReplacedCitySaverNo,
        @MCS_ReplacedRecycleCount = ReplacedRecycleCount,
        @MCS_ProcessDate          = ProcessDate
    FROM CRM_Member_CitySaver
    WHERE CitySaverID = @CitySaverID

    -- debug section
    IF (@IsDebug=1)
    BEGIN
        --output the parameters
        DECLARE @DebugTable TABLE
        (
            DebugID      NVARCHAR(100),
            DebugMessage NVARCHAR(100)
        );

        INSERT INTO @DebugTable VALUES ('Parameters', '');
        INSERT INTO @DebugTable VALUES ('@IsDebug', @IsDebug);
        INSERT INTO @DebugTable VALUES ('@CSBufferDays:', @CSBufferDays);
        INSERT INTO @DebugTable VALUES ('@CS2ndAttemptAllowDays:', CAST(@CS2ndAttemptAllowDays AS CHAR(1)));
        INSERT INTO @DebugTable VALUES ('@CSLastAttemptAllowDays:', CAST(@CSLastAttemptAllowDays AS CHAR(1)));
        INSERT INTO @DebugTable VALUES ('@CitySaverMaximumReceiptUpload:', CAST(@CitySaverMaximumReceiptUpload AS CHAR(1)));
        INSERT INTO @DebugTable VALUES ('@CitySaverID:', CAST(@CitySaverID AS CHAR(10)));
        INSERT INTO @DebugTable VALUES ('@PromotionRuleID:', CAST(@PromotionRuleID AS CHAR(10)));
        --output the promotion rule
        INSERT INTO @DebugTable VALUES ('Promotion Rule:', '');
        INSERT INTO @DebugTable VALUES ('@PR_PromotionRuleID:', CAST(@PR_PromotionRuleID AS CHAR(10)));
        INSERT INTO @DebugTable VALUES ('@PR_PromotionCampaignID:', CAST(@PR_PromotionCampaignID AS CHAR(10)));
        INSERT INTO @DebugTable VALUES ('@PR_MultiplyFixed:', CAST(@PR_MultiplyFixed AS CHAR(10)));
        INSERT INTO @DebugTable VALUES ('@PR_PointMultiplier:', CAST(@PR_PointMultiplier AS CHAR(10)));
        INSERT INTO @DebugTable VALUES ('@PR_FixedPoint:', CAST(@PR_FixedPoint AS CHAR(10)));
        INSERT INTO @DebugTable VALUES ('@PR_StartTime:', CAST(@PR_StartTime AS CHAR(10)));
        INSERT INTO @DebugTable VALUES ('@PR_EndTime:', CAST(@PR_EndTime AS CHAR(10)));
        --output the promotion campaign
        INSERT INTO @DebugTable VALUES ('Promotion Campaign:', '');
        INSERT INTO @DebugTable VALUES ('@PC_PromotionCampaignID:', CAST(@PC_PromotionCampaignID AS CHAR(10)));
        INSERT INTO @DebugTable VALUES ('@PC_CampaignName:', CAST(@PC_CampaignName AS CHAR(100)));
        INSERT INTO @DebugTable VALUES ('@PC_CampaignNameTC:', CAST(@PC_CampaignNameTC AS CHAR(100)));
        INSERT INTO @DebugTable VALUES ('@PC_PointTransactionDescEN:', CAST(@PC_PointTransactionDescEN AS CHAR(100)));
        INSERT INTO @DebugTable VALUES ('@PC_PointTransactionDescTC:', CAST(@PC_PointTransactionDescTC AS CHAR(100)));
        --output the member CitySaver
        INSERT INTO @DebugTable VALUES ('Member CitySaver', '');
        INSERT INTO @DebugTable VALUES ('@MCS_MemberID', @MCS_MemberID);
        INSERT INTO @DebugTable VALUES ('@MCS_CitySaverNo', @MCS_CitySaverNo);
        INSERT INTO @DebugTable VALUES ('@MCS_PurchaseDate', @MCS_PurchaseDate);
        INSERT INTO @DebugTable VALUES ('@MCS_TrxStatus', @MCS_TrxStatus);
        INSERT INTO @DebugTable VALUES ('@MCS_AttemptNo', @MCS_AttemptNo);
        INSERT INTO @DebugTable VALUES ('@MCS_LastAttemptDate', @MCS_LastAttemptDate);
        INSERT INTO @DebugTable VALUES ('@MCS_RecycleCount', @MCS_RecycleCount);
        INSERT INTO @DebugTable VALUES ('@MCS_RegDate', @MCS_RegDate);
        INSERT INTO @DebugTable VALUES ('@MCS_SubmitDate', @MCS_SubmitDate);
        INSERT INTO @DebugTable VALUES ('@MCS_SubmitTime', @MCS_SubmitTime);
        INSERT INTO @DebugTable VALUES ('@MCS_ReasonCode', @MCS_ReasonCode);
        INSERT INTO @DebugTable VALUES ('@MCS_ReplacedCitySaverNo', @MCS_ReplacedCitySaverNo);
        INSERT INTO @DebugTable VALUES ('@MCS_ReplacedRecycleCount', @MCS_ReplacedRecycleCount);
        INSERT INTO @DebugTable VALUES ('@MCS_ProcessDate', @MCS_ProcessDate);
    END

    -- add attempt | power point step 3
    SET @MCS_AttemptNo       = @MCS_AttemptNo + 1;
    SET @MCS_LastAttemptDate = @CurrentDateTime;

    --holds the result
    DECLARE @AfcPointTransaction TABLE
    (
        TxnTime         DATETIME2(7),
        BonusType       INT,
        MemberNo        NCHAR(10),
        MemberID        INT,
        PromotionRuleID INT,
        Points          DECIMAL(16, 2),
        CreateTime      DATETIME2(7),
        UpdateTime      DATETIME2(7)
    );
    DECLARE @CrmViewModelMemberTransaction_Temp TABLE
    (
        ID                      INT IDENTITY
        ,Status                 INT
        ,ReceiptDate            DATE
        ,CitySaverTransactionID BIGINT
        ,InvoiceNo              NVARCHAR(20)
    );

    DECLARE @SJXN_SJSC_ID        VARCHAR(255);
    DECLARE @SJXN_TXN_DT         DATETIME;
    DECLARE @SJXN_TXN_TYPE_CO    VARCHAR(255);
    DECLARE @SJXN_TXN_SUBTYPE_CO VARCHAR(255);
    DECLARE @SJXN_TXN_VALUE      DECIMAL(18, 2);
    DECLARE @SJXN_RECYCLE_COUNT  INT;
    DECLARE @SJSC_START_DT       DATE;

    --more variables
    DECLARE @SjscTxnCount              INT;
    DECLARE @MCS_CitySaverSuccessCount INT;
    DECLARE @AfcPoint                  DECIMAL(16, 2);
    IF
    (
        (@MCS_TrxStatus=-3)
        AND ((@MCS_AttemptNo=1) OR (@MCS_AttemptNo=2))
    )
    BEGIN
        IF
        (
            @MCS_AttemptNo = 2 AND
            @MCS_ProcessDate IS NOT NULL AND
            DATEDIFF(day, @MCS_ProcessDate, @CurrentDate) < @CS2ndAttemptAllowDays - 1
        )
        BEGIN
            SET @MCS_AttemptNo       = @MCS_AttemptNo - 1;
            SET @MCS_ReasonCode = 31;
        END
        ELSE
        BEGIN
            --check SJSC_ID | power point step 4
            SET @SjscTxnCount = 0;
            SELECT
                @SjscTxnCount = COUNT(*)
            FROM AFC_SJSC_Txn
            WHERE
                SJSC_ID = @MCS_CitySaverNo AND
                CONVERT(DATE, SJSC_START_DT)
                    BETWEEN CONVERT(DATE, @PR_StartTime) AND CONVERT(DATE, @PR_EndTime) AND
                CONVERT(DATE, SJSC_START_DT)              --previous use SJSC_START_DT
                    BETWEEN
                        DATEADD(d, (0-@CSBufferDays), @MCS_PurchaseDate) AND
                        DATEADD(d, @CSBufferDays, @MCS_PurchaseDate) AND
                TXN_TYPE_CO = 'UPD' AND
                TXN_SUBTYPE_CO = '007';

            --if one CitySaver transaction is found
            IF (@SjscTxnCount = 1)
            BEGIN
                SELECT
                    @SJXN_SJSC_ID        = SJSC_ID,
                    @SJXN_TXN_DT         = TXN_DT,
                    @SJXN_TXN_TYPE_CO    = TXN_TYPE_CO,
                    @SJXN_TXN_SUBTYPE_CO = TXN_SUBTYPE_CO,
                    @SJXN_TXN_VALUE      = TXN_VALUE,
                    @SJXN_RECYCLE_COUNT  = CAST(RECYCLE_COUNT AS INT),
                    @SJSC_START_DT       = SJSC_START_DT
                FROM AFC_SJSC_Txn
                WHERE
                    SJSC_ID = @MCS_CitySaverNo AND
                    CONVERT(DATE, SJSC_START_DT)
                        BETWEEN CONVERT(DATE, @PR_StartTime) AND CONVERT(DATE, @PR_EndTime) AND
                    CONVERT(DATE, SJSC_START_DT)              --previous use SJSC_START_DT
                        BETWEEN
                            DATEADD(d, (0-@CSBufferDays), @MCS_PurchaseDate) AND
                            DATEADD(d, @CSBufferDays, @MCS_PurchaseDate) AND
                    TXN_TYPE_CO = 'UPD' AND
                    TXN_SUBTYPE_CO = '007';

                IF (@IsDebug=1)
                BEGIN
                    INSERT INTO @DebugTable VALUES ('SJSC_Txn', '');
                    INSERT INTO @DebugTable VALUES ('@SJXN_SJSC_ID', @SJXN_SJSC_ID);
                    INSERT INTO @DebugTable VALUES ('@SJXN_TXN_DT', @SJXN_TXN_DT);
                    INSERT INTO @DebugTable VALUES ('@SJXN_TXN_TYPE_CO', @SJXN_TXN_TYPE_CO);
                    INSERT INTO @DebugTable VALUES ('@SJXN_TXN_SUBTYPE_CO', @SJXN_TXN_SUBTYPE_CO);
                    INSERT INTO @DebugTable VALUES ('@SJXN_TXN_VALUE', @SJXN_TXN_VALUE);
                    INSERT INTO @DebugTable VALUES ('@SJXN_RECYCLE_COUNT', @SJXN_RECYCLE_COUNT);
                    INSERT INTO @DebugTable VALUES ('@SJSC_START_DT', @SJSC_START_DT);
                END

                --get the recycle count
                SET @MCS_RecycleCount = @SJXN_RECYCLE_COUNT;

                DECLARE @RetentionCount INT;

                IF (@SJXN_TXN_VALUE > 0)
                BEGIN
                    --check receipt upload limit | power point step 5
                    SELECT
                        @MCS_CitySaverSuccessCount = COUNT(*)
                    FROM CRM_Member_CitySaver
                    WHERE
                        (
                            (
                                CitySaverNo = @MCS_CitySaverNo AND
                                RecycleCount = @MCS_RecycleCount
                            ) OR
                            (
                                ReplacedCitySaverNo = @MCS_CitySaverNo AND
                                ReplacedRecycleCount = @MCS_RecycleCount
                            )
                        ) AND
                        TrxStatus = 0;

                    IF (@MCS_CitySaverSuccessCount>0)
                    BEGIN
                        INSERT INTO @CrmViewModelMemberTransaction_Temp
                        (
                            Status,
                            ReceiptDate,
                            CitySaverTransactionID,
                            InvoiceNo
                        )
                        VALUES
                        (
                            3,
                            @SJXN_TXN_DT,
                            @CitySaverID,
                            @MCS_CitySaverNo
                        );
                        SET @MCS_TrxStatus  = -2;
                        SET @MCS_ReasonCode = 21; -- Duplicate registration
                    END
                    ELSE
                    BEGIN
                        --grant points
                        IF (@PR_MultiplyFixed=1)
                        BEGIN
                            --multiply
                            SET @AfcPoint = @PR_PointMultiplier * @SJXN_TXN_VALUE;
                        END
                        ELSE IF (@PR_MultiplyFixed=2)
                        BEGIN
                            --fixed
                            SET @AfcPoint = @PR_FixedPoint;
                        END

                        INSERT INTO @AfcPointTransaction
                        (
                            TxnTime,
                            BonusType,
                            MemberNo,
                            MemberID,
                            PromotionRuleID,
                            Points,
                            CreateTime,
                            UpdateTime
                        )
                        VALUES
                        (
                            @SJXN_TXN_DT,
                            4,
                            '',
                            @MCS_MemberID,
                            @PR_PromotionRuleID,
                            @AfcPoint,
                            @CurrentDateTime,
                            @CurrentDateTime
                        );
                        INSERT INTO @CrmViewModelMemberTransaction_Temp
                        (
                            Status,
                            ReceiptDate,
                            CitySaverTransactionID,
                            InvoiceNo
                        )
                        VALUES
                        (
                            2,
                            @SJXN_TXN_DT,
                            @CitySaverID,
                            @SJXN_SJSC_ID
                        );
                        --mark status to success
                        SET @MCS_TrxStatus  = 0;
                        SET @MCS_ReasonCode = 0 -- Normal issue

                        --try to find replacement info, after success
                        SELECT
                            @RetentionCount = COUNT(*)
                        FROM AFC_SJSC_Txn
                        WHERE
                            TXN_TYPE_CO = 'RET' AND
                            REPL_SJSC_ID = @MCS_CitySaverNo AND
                            REPL_RECYCLE_COUNT = @MCS_RecycleCount

                        IF (@RetentionCount=1)
                        BEGIN
                            SELECT
                                @MCS_ReplacedCitySaverNo  = SJSC_ID,
                                @MCS_ReplacedRecycleCount = CAST(RECYCLE_COUNT AS INT)
                            FROM AFC_SJSC_Txn
                            WHERE
                                TXN_TYPE_CO = 'RET' AND
                                REPL_SJSC_ID = @MCS_CitySaverNo AND
                                REPL_RECYCLE_COUNT = @MCS_RecycleCount;
                        END
                    END
                END
                ELSE IF (@SJXN_TXN_VALUE = 0)
                BEGIN
                    --check card replacement, retention transaction | power point step 6
                    SELECT
                        @RetentionCount = COUNT(*)
                    FROM AFC_SJSC_Txn
                    WHERE
                        TXN_TYPE_CO = 'RET' AND
                        REPL_SJSC_ID = @MCS_CitySaverNo AND
                        REPL_RECYCLE_COUNT = @MCS_RecycleCount

                    IF (@RetentionCount=0)
                    BEGIN
                    --replacement record not found
                    --wait for next attempt
                        IF (@MCS_AttemptNo=1)
                        BEGIN
                            SET @MCS_ReasonCode = 31; -- 1st attempt failed'
                            SET @MCS_ProcessDate = @CurrentDate;
                        END
                        ELSE IF (@MCS_AttemptNo=2)
                        BEGIN
                            SET @MCS_ReasonCode = 32; -- 2nd attempt failed'
                        END
                    END
                    ELSE IF (@RetentionCount=1)
                    BEGIN
                        SELECT
                            @MCS_ReplacedCitySaverNo  = SJSC_ID,
                            @MCS_ReplacedRecycleCount = CAST(RECYCLE_COUNT AS INT)
                        FROM AFC_SJSC_Txn
                        WHERE
                            TXN_TYPE_CO = 'RET' AND
                            REPL_SJSC_ID = @MCS_CitySaverNo AND
                            REPL_RECYCLE_COUNT = @MCS_RecycleCount;

                        DECLARE @ReplacedSjscTxnCount INT;
                        SELECT
                            @ReplacedSjscTxnCount = COUNT(*)
                        FROM AFC_SJSC_Txn
                        WHERE
                            SJSC_ID = @MCS_ReplacedCitySaverNo AND
                            (
                                (
                                    RECYCLE_COUNT = @MCS_ReplacedRecycleCount AND
                                    @MCS_ReplacedRecycleCount <> 0
                                ) OR
                                @MCS_ReplacedRecycleCount=0
                            ) AND
                            CONVERT(DATE, SJSC_START_DT)              --previous use SJSC_START_DT
                                BETWEEN
                                    DATEADD(d, (0-@CSBufferDays), @MCS_PurchaseDate) AND
                                    DATEADD(d, @CSBufferDays, @MCS_PurchaseDate) AND
                            TXN_TYPE_CO = 'UPD' AND
                            TXN_SUBTYPE_CO = '007';

                        IF (@ReplacedSjscTxnCount = 1)
                        BEGIN
                            DECLARE @SJXN_TXN_VALUE_REPLACED DECIMAL(18, 2);



                            SELECT
                                @SJXN_TXN_VALUE_REPLACED = TXN_VALUE,
                                @UPDRecycleCount=CAST(RECYCLE_COUNT AS INT)
                            FROM AFC_SJSC_Txn
                            WHERE
                                SJSC_ID = @MCS_ReplacedCitySaverNo AND
                                (
                                    (
                                        RECYCLE_COUNT = @MCS_ReplacedRecycleCount AND
                                        @MCS_ReplacedRecycleCount <> 0
                                    ) OR
                                    @MCS_ReplacedRecycleCount=0
                                ) AND
                                CONVERT(DATE, SJSC_START_DT) --previous use SJSC_START_DT
                                    BETWEEN
                                        DATEADD(d, (0-@CSBufferDays), @MCS_PurchaseDate) AND
                                        DATEADD(d, @CSBufferDays, @MCS_PurchaseDate) AND
                                TXN_TYPE_CO = 'UPD' AND
                                TXN_SUBTYPE_CO = '007'

                            IF (@SJXN_TXN_VALUE_REPLACED > 0)
                            BEGIN
                                SELECT
                                    @MCS_CitySaverSuccessCount = COUNT(*)
                                FROM CRM_Member_CitySaver
                                WHERE
                                    (
                                        (
                                            CitySaverNo = @MCS_ReplacedCitySaverNo AND
                                            RecycleCount = @UPDRecycleCount
                                        ) OR
                                        (
                                            ReplacedCitySaverNo = @MCS_ReplacedCitySaverNo AND
                                            ReplacedRecycleCount = @UPDRecycleCount
                                        )
                                    ) AND
                                    TrxStatus = 0;

                                IF (@MCS_CitySaverSuccessCount>0)
                                BEGIN
                                     INSERT INTO @CrmViewModelMemberTransaction_Temp
                                    (
                                        Status,
                                        ReceiptDate,
                                        CitySaverTransactionID,
                                        InvoiceNo
                                    )
                                    VALUES
                                    (
                                        3,
                                        @SJXN_TXN_DT,
                                        @CitySaverID,
                                        @SJXN_SJSC_ID
                                    );

                                    SET @MCS_TrxStatus  = -2;
                                    SET @MCS_ReasonCode = 24; -- Replacement with single sales record found but duplicated
                                END
                                ELSE
                                BEGIN
                                    --grant points
                                    IF (@PR_MultiplyFixed=1)
                                    BEGIN
                                        --multiply
                                        SET @AfcPoint = @PR_PointMultiplier * @SJXN_TXN_VALUE_REPLACED;
                                    END
                                    ELSE IF (@PR_MultiplyFixed=2)
                                    BEGIN
                                        --fixed
                                        SET @AfcPoint = @PR_FixedPoint;
                                    END
                                    INSERT INTO @AfcPointTransaction
                                    (
                                        TxnTime,
                                        BonusType,
                                        MemberNo,
                                        MemberID,
                                        PromotionRuleID,
                                        Points,
                                        CreateTime,
                                        UpdateTime
                                    )
                                    VALUES
                                    (
                                        @SJXN_TXN_DT,
                                        4,
                                        '',
                                        @MCS_MemberID,
                                        @PR_PromotionRuleID,
                                        @AfcPoint,
                                        @CurrentDateTime,
                                        @CurrentDateTime
                                    );
                                    INSERT INTO @CrmViewModelMemberTransaction_Temp
                                    (
                                        Status
                                        ,ReceiptDate
                                        ,CitySaverTransactionID
                                        ,InvoiceNo
                                    )
                                    VALUES
                                    (
                                        2,
                                        @SJXN_TXN_DT,
                                        @CitySaverID,
                                        @SJXN_SJSC_ID
                                    );
                                    --mark status to success
                                    SET @MCS_TrxStatus  = 0;
                                    SET @MCS_ReasonCode = 1; -- Replacement with single sales record found
                                END
                            END
                            ELSE
                            BEGIN
                                INSERT INTO @CrmViewModelMemberTransaction_Temp
                                (
                                    Status
                                    ,ReceiptDate
                                    ,CitySaverTransactionID
                                    ,InvoiceNo
                                )
                                VALUES
                                (
                                    3,
                                    @SJXN_TXN_DT,
                                    @CitySaverID,
                                    @SJXN_SJSC_ID
                                );

                                SET @MCS_TrxStatus  = -2;
                                SET @MCS_ReasonCode = 25; -- Replacements other cases as with multiple times of replacement
                            END
                        END
                        ELSE IF (@ReplacedSjscTxnCount > 1)
                        BEGIN
                            INSERT INTO @CrmViewModelMemberTransaction_Temp
                            (
                                Status,
                                ReceiptDate,
                                CitySaverTransactionID,
                                InvoiceNo
                            )
                            VALUES
                            (
                                3,
                                @SJXN_TXN_DT,
                                @CitySaverID,
                                @MCS_CitySaverNo
                            );
                            SET @MCS_TrxStatus  = -2;
                            SET @MCS_ReasonCode = 23; -- Replacement with multiple sales records found
                        END
                        ELSE
                        BEGIN
                            IF (@MCS_AttemptNo=1)
                            BEGIN
                                SET @MCS_ReasonCode = 31; -- 1st attempt failed'
                                SET @MCS_ProcessDate=@CurrentDate;
                            END
                            ELSE IF (@MCS_AttemptNo=2)
                            BEGIN
                                SET @MCS_ReasonCode = 32; -- 2nd attempt failed'
                            END
                        END
                    END
                ELSE IF (@RetentionCount>1)
                BEGIN
                    INSERT INTO @CrmViewModelMemberTransaction_Temp
                    (
                        Status,
                        ReceiptDate,
                        CitySaverTransactionID,
                        InvoiceNo
                    )
                    VALUES
                    (
                        3,
                        @SJXN_TXN_DT,
                        @CitySaverID,
                        @MCS_CitySaverNo
                    );
                    SET @MCS_TrxStatus  = -2;
                    SET @MCS_ReasonCode = 26; -- Replacement with multiple retention records found
                END
            END
        END
            --if no CitySaver transaction is not found
            ELSE IF (@SjscTxnCount = 0)
            BEGIN
                --wait for next attempt
                IF (@MCS_AttemptNo=1)
                BEGIN
                    SET @MCS_ReasonCode = 31; -- 1st attempt failed
                    SET @MCS_ProcessDate=@CurrentDate;
                END
                ELSE IF (@MCS_AttemptNo=2)
                BEGIN
                    SET @MCS_ReasonCode = 32; -- 2nd attempt failed
                END
            END
            --if more than one CitySaver transaction is found
            ELSE IF (@SjscTxnCount > 1)
            BEGIN

                INSERT INTO @CrmViewModelMemberTransaction_Temp
                (
                    Status,
                    ReceiptDate,
                    CitySaverTransactionID,
                    InvoiceNo
                )
                VALUES
                (
                    3,
                    @SJXN_TXN_DT,
                    @CitySaverID,
                    @MCS_CitySaverNo
                );

                SET @MCS_TrxStatus  = -2;
                SET @MCS_ReasonCode = 40; -- Found multiple sales record and undetermined
            END
        END
    END
    ELSE IF
    (
        @MCS_TrxStatus = -3 AND
        @MCS_AttemptNo = 3
    )
    BEGIN

        IF
        (
            @MCS_ProcessDate IS NOT NULL AND
            DATEDIFF(day, @MCS_ProcessDate, @CurrentDate) < @CSLastAttemptAllowDays - 1
        )
        BEGIN
            SET @MCS_ReasonCode = 32;
            SET @MCS_AttemptNo       = @MCS_AttemptNo - 1;
        END
        ELSE
        BEGIN
            --check usage transactions
            SELECT
                @SjscTxnCount = COUNT(*)
            FROM AFC_SJSC_Txn
            WHERE
                SJSC_ID = @MCS_CitySaverNo AND
                CONVERT(DATE, TXN_DT) BETWEEN CONVERT(DATE, @PR_StartTime) AND CONVERT(DATE, @PR_EndTime) AND
                CONVERT(DATE, TXN_DT)
                    BETWEEN
                        DATEADD(d, (0-@CSBufferDays), @MCS_PurchaseDate) AND
                        DATEADD(d, @CSBufferDays+14, @MCS_PurchaseDate) AND
                TXN_TYPE_CO = 'USE' AND
                (REPL_TKT <> 1 OR REPL_TKT IS NULL) AND
                SJSC_START_DT BETWEEN CONVERT(DATE, @PR_StartTime) AND CONVERT(DATE, @PR_EndTime);

            IF (@SjscTxnCount>0)
            BEGIN
                --
                SELECT TOP(1)
                    @SJXN_TXN_DT        = TXN_DT,
                    @SJXN_RECYCLE_COUNT = CAST(RECYCLE_COUNT AS INT)
                FROM AFC_SJSC_Txn
                WHERE
                    SJSC_ID = @MCS_CitySaverNo AND
                    TXN_DT BETWEEN CONVERT(DATE, @PR_StartTime) AND CONVERT(DATE, @PR_EndTime) AND
                    TXN_DT
                        BETWEEN
                            DATEADD(d, (0-@CSBufferDays), @MCS_PurchaseDate) AND
                            DATEADD(d, @CSBufferDays+14, @MCS_PurchaseDate) AND
                    TXN_TYPE_CO = 'USE' AND
                    (REPL_TKT <> 1 OR REPL_TKT IS NULL)AND
                    SJSC_START_DT
                        BETWEEN
                            CONVERT(DATE, @PR_StartTime) AND
                            CONVERT(DATE, @PR_EndTime)
                ORDER BY TXN_DT;

                --get the recycle count
                SET @MCS_RecycleCount = @SJXN_RECYCLE_COUNT;

                --check receipt upload limit | power point step 5
                SELECT
                    @MCS_CitySaverSuccessCount = COUNT(*)
                FROM CRM_Member_CitySaver
                WHERE
                    (
                        (
                            CitySaverNo = @MCS_CitySaverNo AND
                            RecycleCount = @MCS_RecycleCount
                        ) OR
                        (
                            ReplacedCitySaverNo = @MCS_CitySaverNo AND
                            ReplacedRecycleCount = @MCS_RecycleCount
                        )
                    ) AND
                    TrxStatus = 0;
                IF (@MCS_CitySaverSuccessCount>0)
                BEGIN
                    INSERT INTO @CrmViewModelMemberTransaction_Temp
                        (
                            Status,
                            ReceiptDate,
                            CitySaverTransactionID,
                            InvoiceNo
                        )
                        VALUES
                        (
                            3,
                            @SJXN_TXN_DT,
                            @CitySaverID,
                            @MCS_CitySaverNo
                        );
                    SET @MCS_TrxStatus  = -2;
                    SET @MCS_ReasonCode = 21; -- Duplicate registration
                END
                ELSE
                BEGIN
                    --grant points
                    --fixed, 3rd attempt have no txn value
                    SET @AfcPoint = @PR_FixedPoint;
                    --
                    INSERT INTO @AfcPointTransaction (
                        TxnTime,
                        BonusType,
                        MemberNo,
                        MemberID,
                        PromotionRuleID,
                        Points,
                        CreateTime,
                        UpdateTime
                    ) VALUES (
                        @SJXN_TXN_DT,
                        4,
                        '',
                        @MCS_MemberID,
                        @PR_PromotionRuleID,
                        @AfcPoint,
                        @CurrentDateTime,
                        @CurrentDateTime
                    );
                    INSERT INTO @CrmViewModelMemberTransaction_Temp
                    (
                        Status,
                        ReceiptDate,
                        CitySaverTransactionID,
                        InvoiceNo
                    )
                    VALUES
                    (
                        2,
                        @SJXN_TXN_DT,
                        @CitySaverID,
                        @MCS_CitySaverNo
                    );
                    --mark status to success
                    SET @MCS_TrxStatus  = 0;
                    SET @MCS_ReasonCode = 0; -- Normal issue
                END
            END
            ELSE
            BEGIN
                --find travel records, indicated as replacement card
                SELECT
                    @SjscTxnCount = COUNT(*)
                FROM AFC_SJSC_Txn
                WHERE
                    SJSC_ID = @MCS_CitySaverNo AND
                    CONVERT(DATE, TXN_DT) BETWEEN CONVERT(DATE, @PR_StartTime) AND CONVERT(DATE, @PR_EndTime) AND
                    CONVERT(DATE, TXN_DT)
                        BETWEEN
                            DATEADD(d, (0-@CSBufferDays), @MCS_PurchaseDate) AND
                            DATEADD(d, @CSBufferDays+14, @MCS_PurchaseDate) AND
                    TXN_TYPE_CO = 'USE' AND
                    SJSC_START_DT
                        BETWEEN
                            CONVERT(DATE, @PR_StartTime) AND
                            CONVERT(DATE, @PR_EndTime) AND
                    REPL_TKT = 1;

                IF (@SjscTxnCount > 0)
                BEGIN
                    INSERT INTO @CrmViewModelMemberTransaction_Temp
                    (
                        Status,
                        ReceiptDate,
                        CitySaverTransactionID,
                        InvoiceNo
                    )
                    VALUES
                    (
                        3,
                        @SJXN_TXN_DT,
                        @CitySaverID,
                        @MCS_CitySaverNo
                    );
                    SET @MCS_TrxStatus  = -2;
                    SET @MCS_ReasonCode = 27; -- Usage as travel records found but indicated as replacement card
                END
                ELSE
                BEGIN
                    INSERT INTO @CrmViewModelMemberTransaction_Temp
                    (
                        Status,
                        ReceiptDate,
                        CitySaverTransactionID,
                        InvoiceNo
                    )
                    VALUES
                    (
                        3,
                        @SJXN_TXN_DT,
                        @CitySaverID,
                        @MCS_CitySaverNo
                    );
                    --3rd attempt failed
                    SET @MCS_TrxStatus  = -2;
                    SET @MCS_ReasonCode = 22; -- 3rd attempt failed
                END
            END
        END
    END
    ELSE
    BEGIN
        --incorrect CitySaver record selected
        INSERT INTO @CrmViewModelMemberTransaction_Temp
        (
            Status,
            ReceiptDate,
            CitySaverTransactionID,
            InvoiceNo
        )
        VALUES
        (
            3,
            @SJXN_TXN_DT,
            @CitySaverID,
            @MCS_CitySaverNo
        );

        SET @MCS_TrxStatus  = -2;
        SET @MCS_AttemptNo  = 3;
        SET @MCS_ReasonCode = -1; -- Incorrect attempt
    END

    --afc variable
    DECLARE @AFC_TxnTime         DATETIME2(7);
    DECLARE @AFC_BonusType       INT;
    DECLARE @AFC_MemberNo        NVARCHAR(50);
    DECLARE @AFC_MemberID        INT;
    DECLARE @AFC_PromotionRuleID INT;
    DECLARE @AFC_Points          DECIMAL(16, 2);
    DECLARE @AFC_CreateTime      DATETIME2(7);
    DECLARE @AFC_UpdateTime      DATETIME2(7);

    --point transaction varible
    DECLARE @PT_TransactionDate       DATE;
    DECLARE @PT_TransactionTime       DATETIME2(7);
    DECLARE @PT_MemberID              INT;
    DECLARE @PT_PointBucketID         BIGINT;
    DECLARE @PT_TransactionType       INT;
    DECLARE @PT_PointMovement         DECIMAL(16,2);
    DECLARE @PT_PointBalance          DECIMAL(16,2);
    DECLARE @PT_DescriptionEN         NVARCHAR(50);
    DECLARE @PT_DescriptionTC         NVARCHAR(50);
    DECLARE @PT_RelatedTransactionID  BIGINT;
    DECLARE @PT_CampaignRewardID      BIGINT;
    DECLARE @PT_PromotionRuleID       INT;
    DECLARE @PT_PromotionCampaignID   INT;
    DECLARE @PT_SpendingTransactionID BIGINT;
    DECLARE @PT_MemberRewardID        BIGINT;
    DECLARE @PT_CreateTime            DATETIME2(7);

    --point bucket variable
    DECLARE @PB_MemberID      INT;
    DECLARE @PB_PointBucketID BIGINT;
    DECLARE @PB_ActivateTime  DATETIME2(7);
    DECLARE @PB_ExpireTime    DATETIME2(7);
    DECLARE @PB_PointBalance  DECIMAL(16,2);
    DECLARE @PB_TotalPointEarned  DECIMAL(16,2);
    DECLARE @PB_UpdateTime    DATETIME2(7)      = @CurrentDateTime;
    DECLARE @PB_SyncedToD365  BIT               = 0;

    --member transaction variable
    DECLARE @MT_TransactionID                      BIGINT;
    DECLARE @MT_CreateTime                         DATETIME2(7) = @CurrentDateTime;
    DECLARE @MT_UpdateTime                         DATETIME2(7) = @CurrentDateTime;
    DECLARE @MT_MemberID                           INT;
    DECLARE @MT_TitleEN                            NVARCHAR(100);
    DECLARE @MT_TitleTC                            NVARCHAR(100);
    DECLARE @MT_SubtitleEN                         NVARCHAR(100);
    DECLARE @MT_SubtitleTC                         NVARCHAR(100);
    DECLARE @MT_Status                             INT;
    DECLARE @MT_PointMovement                      DECIMAL(16, 2);
    DECLARE @MT_TransactionDate                    DATE;
    DECLARE @MT_TransactionTime                    DATETIME2(7);
    DECLARE @MT_SubmitDate                         DATE;
    DECLARE @MT_SubmitTime                         DATETIME2(7);
    DECLARE @MT_ApproveDate                        DATE;
    DECLARE @MT_ApproveTime                        DATETIME2(7);
    DECLARE @MT_ReceiptDate                        DATE;
    DECLARE @MT_SpendingTransactionID              BIGINT;
    DECLARE @MT_SpendingTransactionMerchantReceipt NVARCHAR(500);
    DECLARE @MT_SpendingTransactionBankReceipt     NVARCHAR(500);
    DECLARE @MT_PointTransactionID                 BIGINT;
    DECLARE @MT_MemberActivityID                   BIGINT;
    DECLARE @MT_CitySaverTransactionID             BIGINT;
    DECLARE @MT_MerchantReceipt                    NVARCHAR(500);
    DECLARE @MT_BankReceipt                        NVARCHAR(100);
    DECLARE @MT_ShopNameEN                         NVARCHAR(100);
    DECLARE @MT_ShopNameTC                         NVARCHAR(100);
    DECLARE @MT_MallNameEN                         NVARCHAR(100);
    DECLARE @MT_MallNameTC                         NVARCHAR(100);
    --more fields
    DECLARE @MT_InvoiceNo                          NVARCHAR(20);
    --more fields

    --member point transaction table variable
    DECLARE @CrmMemberPointTransaction TABLE
    (
        TransactionDate        DATE
        ,TransactionTime       DATETIME2(7)
        ,MemberID              INT
        ,PointBucketID         BIGINT
        ,TransactionType       INT
        ,PointMovement         DECIMAL(16,2)
        ,PointBalance          DECIMAL(16,2)
        ,DescriptionEN         NVARCHAR(50)
        ,DescriptionTC         NVARCHAR(50)
        ,RelatedTransactionID  BIGINT
        ,CampaignRewardID      BIGINT
        ,PromotionRuleID       INT
        ,PromotionCampaignID   INT
        ,SpendingTransactionID BIGINT
        ,MemberRewardID        BIGINT
        ,CreateTime            DATETIME2(7)
        ,SerialID INT IDENTITY(1,1)
    );

    --member point bucket table variable
    DECLARE @CrmMemberPointBucket TABLE
    (
        MemberID       INT
        ,PointBucketID BIGINT
        ,PointBalance  DECIMAL(16,2)
        ,UpdateTime    DATETIME2(7)
        ,SyncedToD365  BIT
        ,TotalPointEarned DECIMAL(16,2)
    );

    --member transaction table varible
    DECLARE @CrmViewModelMemberTransaction TABLE
    (
        ID                                  INT IDENTITY
        ,TransactionID                      BIGINT
        ,CreateTime                         DATETIME2(7)
        ,UpdateTime                         DATETIME2(7)
        --TransactionGUID                    GUID,
        ,MemberID                           INT
        ,TitleEN                            NVARCHAR(100)
        ,TitleTC                            NVARCHAR(100)
        ,SubtitleEN                         NVARCHAR(100)
        ,SubtitleTC                         NVARCHAR(100)
        ,Status                             INT
        ,PointMovement                      DECIMAL(16, 2)
        ,TransactionDate                    DATE
        ,TransactionTime                    DATETIME2(7)
        ,SubmitDate                         DATE
        ,SubmitTime                         DATETIME2(7)
        ,ApproveDate                        DATE
        ,ApproveTime                        DATETIME2(7)
        ,ReceiptDate                        DATE
        ,SpendingTransactionID              BIGINT
        ,SpendingTransactionMerchantReceipt NVARCHAR(500)
        ,SpendingTransactionBankReceipt     NVARCHAR(500)
        ,PointTransactionID                 BIGINT
        ,MemberActivityID                   BIGINT
        ,CitySaverTransactionID             BIGINT
        ,MerchantReceipt                    NVARCHAR(500)
        ,BankReceipt                        NVARCHAR(100)
        ,ShopNameEN                         NVARCHAR(100)
        ,ShopNameTC                         NVARCHAR(100)
        ,MallNameEN                         NVARCHAR(100)
        ,MallNameTC                         NVARCHAR(100)
        --more fields
        ,InvoiceNo                          NVARCHAR(20)
        --more fields
    );

    --insert to AFC
    DECLARE AfcPointTransactionCursor CURSOR FOR
        SELECT
            TxnTime,
            BonusType,
            MemberNo,
            MemberID,
            PromotionRuleID,
            Points,
            CreateTime,
            UpdateTime
        FROM @AfcPointTransaction;

    OPEN AfcPointTransactionCursor;
    FETCH NEXT FROM AfcPointTransactionCursor INTO
        @AFC_TxnTime,
        @AFC_BonusType,
        @AFC_MemberNo,
        @AFC_MemberID,
        @AFC_PromotionRuleID,
        @AFC_Points,
        @AFC_CreateTime,
        @AFC_UpdateTime;
    WHILE @@FETCH_STATUS = 0
    BEGIN
        IF (@AFC_Points>0)
        BEGIN
            --set cut off with +8 hours
            --to date from datetime2(7) for PointTransaction.TransactionDate
            SET @PT_TransactionDate = @CurrentDate;             --or use transaction date | CAST(DATEADD(HH, 8, @AFC_TxnTime) AS DATE)
            SET @PT_TransactionTime = @CurrentDateTime;
            SET @PT_MemberID        = @AFC_MemberID;
            SET @PT_PointBucketID   = 0;
            SET @PT_TransactionType = 2;
            SET @PT_PointMovement   = @AFC_Points;
            SET @PT_PromotionRuleID = @AFC_PromotionRuleID;
            SET @PT_CreateTime      = @AFC_CreateTime;

            SET @PB_MemberID = @AFC_MemberID;

            --get point bucket
            SET @PB_PointBucketID = NULL;
            SELECT TOP(1)
                @PB_PointBucketID = PointBucketID,
                @PB_ActivateTime  = ActivateTime,
                @PB_ExpireTime    = ExpireTime
            FROM CRM_Member_Point_Bucket
            WHERE
                MemberID = @AFC_MemberID AND
                ActivateTime <= @PT_TransactionTime AND
                @PT_TransactionTime <= ExpireTime
            ;

            IF (@PB_PointBucketID IS NOT NULL)
            BEGIN
                --get point balance (on temp table first, if null then on real table)
                --get point balance (on temp table)
                SET @PB_PointBalance = NULL;

                SELECT TOP(1) @PB_PointBalance = PointBalance
                FROM @CrmMemberPointTransaction
                WHERE
                    MemberID = @PT_MemberID AND
                    PointBucketID = @PB_PointBucketID
                ORDER BY SerialID DESC;

                IF (@PB_PointBalance IS NULL)
                BEGIN
                    --get point balance (on real table)
                    SELECT @PB_PointBalance = ISNULL(SUM(PointMovement), 0)
                    FROM CRM_Member_Point_Transaction
                    WHERE PointBucketID = @PB_PointBucketID;
                END


                IF (@PB_TotalPointEarned IS NULL)
                BEGIN
                    --get total pointEarned (on real table)
                    SELECT @PB_TotalPointEarned = TotalPointEarned
                    FROM CRM_Member_Point_Bucket
                    WHERE PointBucketID = @PB_PointBucketID;
                END

                --add point movement to point balance
                SET @PB_PointBalance  += @PT_PointMovement;
                SET @PT_PointBucketID = @PB_PointBucketID;
                SET @PT_PointBalance  = @PB_PointBalance;
                SET @PB_TotalPointEarned += @PT_PointMovement;

                --get point movement (on temp table)
                SELECT @PT_PointMovement = ISNULL(SUM(PointMovement), 0) + @PT_PointMovement
                FROM @CrmMemberPointTransaction
                WHERE
                    PointBucketID = @PB_PointBucketID AND
                    TransactionDate = @PT_TransactionDate;

                --get promotion rule
                SELECT TOP(1) @PT_PromotionCampaignID = PromotionCampaignID
                FROM CRM_Promotion_Rule
                WHERE PromotionRuleID = @PT_PromotionRuleID

                --get promotion campaign
                SELECT TOP(1)
                    @MT_TitleEN = CampaignName,
                    @MT_TitleTC = CampaignNameTC,
                    @PT_DescriptionEN = PointTransactionDescEN,
                    @PT_DescriptionTC = PointTransactionDescTC
                FROM CRM_Promotion_Campaign
                WHERE PromotionCampaignID = @PT_PromotionCampaignID;

                --collect point transaction
                IF EXISTS
                (
                    SELECT MemberID
                    FROM @CrmMemberPointTransaction
                    WHERE
                        MemberID = @PT_MemberID AND
                        TransactionDate = @PT_TransactionDate AND
                        PointBucketID = @PT_PointBucketID
                )
                BEGIN
                    --consolidate point transaction
                    UPDATE @CrmMemberPointTransaction
                    SET
                        PointMovement = @PT_PointMovement,
                        PointBalance = @PT_PointBalance
                    WHERE
                        MemberID = @PT_MemberID AND
                        TransactionDate = @PT_TransactionDate AND
                        PointBucketID = @PT_PointBucketID;

                    --consolidate member transaction
                    UPDATE @CrmViewModelMemberTransaction
                    SET PointMovement = @PT_PointMovement
                    WHERE
                        MemberID = @PT_MemberID AND
                        TransactionDate = @PT_TransactionDate;
                END
                ELSE
                BEGIN
                    --collect point transaction
                    INSERT INTO @CrmMemberPointTransaction
                    (
                        TransactionDate,
                        TransactionTime,
                        MemberID,
                        PointBucketID,
                        TransactionType,
                        PointMovement,
                        PointBalance,
                        PromotionRuleID,
                        DescriptionEN,
                        DescriptionTC,
                        RelatedTransactionID,
                        CampaignRewardID,
                        PromotionCampaignID,
                        SpendingTransactionID,
                        MemberRewardID,
                        CreateTime
                    )
                    VALUES
                    (
                        @PT_TransactionDate,
                        @PT_TransactionTime,
                        @PT_MemberID,
                        @PT_PointBucketID,
                        @PT_TransactionType,
                        @PT_PointMovement,
                        @PT_PointBalance,
                        @PT_PromotionRuleID,
                        @PT_DescriptionEN,
                        @PT_DescriptionTC,
                        @PT_RelatedTransactionID,
                        @PT_CampaignRewardID,
                        @PT_PromotionCampaignID,
                        @PT_SpendingTransactionID,
                        @PT_MemberRewardID,
                        @PT_CreateTime
                    );

                    --collect member transaction
                    SET @MT_MemberID               = @PT_MemberID;
                    SET @MT_SubtitleEN             = @PT_DescriptionEN; --promotion rule name en
                    SET @MT_SubtitleTC             = @PT_DescriptionTC; --promotion rule name tc
                    SET @MT_Status                 = 1;  -- 1 pending | 2 accepted | 3 declined
                    SET @MT_PointMovement          = @PT_PointMovement;
                    SET @MT_TransactionDate        = @PT_TransactionDate;
                    SET @MT_TransactionTime        = @PT_TransactionTime;
                    SET @MT_SubmitDate             = @MCS_SubmitDate;
                    SET @MT_SubmitTime             = @MCS_SubmitTime;
                    SET @MT_ReceiptDate            = @AFC_TxnTime;
                    SET @MT_ApproveDate            = @CurrentDate;
                    SET @MT_ApproveTime            = @CurrentDateTime;
                    SET @MT_CitySaverTransactionID = NULL;
                    SET @MT_InvoiceNo              = NULL;

                    INSERT INTO @CrmViewModelMemberTransaction
                    (
                        CreateTime,
                        UpdateTime,
                        MemberID,
                        TitleEN,
                        TitleTC,
                        SubtitleEN,
                        SubtitleTC,
                        Status,
                        PointMovement,
                        TransactionDate,
                        TransactionTime,
                        SubmitDate,
                        SubmitTime,
                        ApproveDate,
                        ApproveTime,
                        ReceiptDate,
                        CitySaverTransactionID,
                        InvoiceNo
                    )
                    VALUES
                    (
                        @MT_CreateTime,
                        @MT_UpdateTime,
                        @MT_MemberID,
                        @MT_TitleEN,
                        @MT_TitleTC,
                        @MT_SubtitleEN,
                        @MT_SubtitleTC,
                        @MT_Status,
                        @MT_PointMovement,
                        @MT_TransactionDate,
                        @MT_TransactionTime,
                        @MT_SubmitDate,
                        @MT_SubmitTime,
                        @MT_ApproveDate,
                        @MT_ApproveTime,
                        @MT_ReceiptDate,
                        @MT_CitySaverTransactionID,
                        @MT_InvoiceNo
                    );
                END

                --collect point bucket
                IF EXISTS
                (
                    SELECT @PB_PointBucketID
                    FROM @CrmMemberPointBucket
                    WHERE PointBucketID = @PB_PointBucketID
                )
                BEGIN
                    UPDATE @CrmMemberPointBucket SET
                        PointBalance = @PB_PointBalance,
                        TotalPointEarned = @PB_TotalPointEarned
                    WHERE PointBucketID = @PB_PointBucketID;
                END
                ELSE
                BEGIN
                    INSERT INTO @CrmMemberPointBucket
                    (
                        PointBucketID,
                        UpdateTime,
                        SyncedToD365,
                        MemberID,
                        PointBalance,
                        TotalPointEarned
                    )
                    VALUES
                    (
                        @PB_PointBucketID,
                        @PB_UpdateTime,
                        @PB_SyncedToD365,
                        @PB_MemberID,
                        @PB_PointBalance,
                        @PB_TotalPointEarned
                    );
                ;
                END
            END
            ELSE
            BEGIN
                --handle point bucket not found
                INSERT INTO @CrmViewModelMemberTransaction_Temp
                (
                    Status,
                    ReceiptDate,
                    CitySaverTransactionID,
                    InvoiceNo
                )
                VALUES
                (
                    3,
                    @SJXN_TXN_DT,
                    @CitySaverID,
                    @MCS_CitySaverNo
                );

                SET @MCS_TrxStatus  = -2;
                SET @MCS_ReasonCode = -2; -- Member Point Bucket not found
            END
        END

        --fetch next record
        FETCH NEXT FROM AfcPointTransactionCursor INTO
            @AFC_TxnTime,
            @AFC_BonusType,
            @AFC_MemberNo,
            @AFC_MemberID,
            @AFC_PromotionRuleID,
            @AFC_Points,
            @AFC_CreateTime,
            @AFC_UpdateTime;
    END
    CLOSE AfcPointTransactionCursor;
    DEALLOCATE AfcPointTransactionCursor;

    MERGE INTO @CrmViewModelMemberTransaction AS MemberTransaction
        USING @CrmViewModelMemberTransaction_Temp AS Temp
            ON MemberTransaction.ID = Temp.ID
    WHEN MATCHED THEN
        UPDATE SET
            MemberTransaction.Status                 = Temp.Status,
            MemberTransaction.ReceiptDate            = Temp.ReceiptDate,
            MemberTransaction.CitySaverTransactionID = Temp.CitySaverTransactionID,
            MemberTransaction.InvoiceNo              = Temp.InvoiceNo
    ;

    IF (@IsDebug=1)
    BEGIN
        --show the memeber CitySaver result
        INSERT INTO @DebugTable VALUES ('Member CitySaver - Result', '');
        INSERT INTO @DebugTable VALUES ('@MCS_MemberID', @MCS_MemberID);
        INSERT INTO @DebugTable VALUES ('@MCS_CitySaverNo', @MCS_CitySaverNo);
        INSERT INTO @DebugTable VALUES ('@MCS_PurchaseDate', @MCS_PurchaseDate);
        INSERT INTO @DebugTable VALUES ('@MCS_TrxStatus', @MCS_TrxStatus);
        INSERT INTO @DebugTable VALUES ('@MCS_AttemptNo', @MCS_AttemptNo);
        INSERT INTO @DebugTable VALUES ('@MCS_LastAttemptDate', @MCS_LastAttemptDate);
        INSERT INTO @DebugTable VALUES ('@MCS_RecycleCount', @MCS_RecycleCount);
        INSERT INTO @DebugTable VALUES ('@MCS_RegDate', @MCS_RegDate);
        INSERT INTO @DebugTable VALUES ('@MCS_SubmitDate', @MCS_SubmitDate);
        INSERT INTO @DebugTable VALUES ('@MCS_SubmitTime', @MCS_SubmitTime);
        INSERT INTO @DebugTable VALUES ('@MCS_ReasonCode', @MCS_ReasonCode);
        INSERT INTO @DebugTable VALUES ('@MCS_ReplacedCitySaverNo', @MCS_ReplacedCitySaverNo);
        INSERT INTO @DebugTable VALUES ('@MCS_ReplacedRecycleCount', @MCS_ReplacedRecycleCount);
        --show the temp tables
        SELECT * FROM @DebugTable;
        SELECT * FROM @AfcPointTransaction;
        SELECT * FROM @CrmViewModelMemberTransaction_Temp;
        --show temp tables, for member point transaction
        SELECT * FROM @CrmMemberPointTransaction;
        SELECT * FROM @CrmViewModelMemberTransaction;
        SELECT * FROM @CrmMemberPointBucket;
    END
    ELSE
    BEGIN
        --save the results
        DECLARE @modifyReplacedRecycleCount int
        IF (@UPDRecycleCount IS null)
        BEGIN
            SET @modifyReplacedRecycleCount=@MCS_ReplacedRecycleCount
        END
        ELSE
        BEGIN
            SET @modifyReplacedRecycleCount=@UPDRecycleCount
        END

        UPDATE CRM_Member_CitySaver SET
            TrxStatus            = @MCS_TrxStatus,
            AttemptNo            = @MCS_AttemptNo,
            LastAttemptDate      = @MCS_LastAttemptDate,
            RecycleCount         = @MCS_RecycleCount,
            RegDate              = @MCS_RegDate,
            SubmitDate           = @MCS_SubmitDate,
            SubmitTime           = @MCS_SubmitTime,
            ReasonCode           = @MCS_ReasonCode,
            ReplacedCitySaverNo  = @MCS_ReplacedCitySaverNo,
            ReplacedRecycleCount = @modifyReplacedRecycleCount,
            ProcessDate          = @MCS_ProcessDate
        WHERE CitySaverID = @CitySaverID;
        --insert member point transaction
        DECLARE @CrmMemberPointTransactionID TABLE
        (
            ID                 INT IDENTITY,
            PointTransactionID BIGINT
        );
        INSERT INTO CRM_Member_Point_Transaction
        (
            TransactionDate,
            TransactionTime,
            MemberID,
            PointBucketID,
            TransactionType,
            PointMovement ,PointBalance,
            DescriptionEN ,DescriptionTC,
            RelatedTransactionID,
            CampaignRewardID,
            PromotionRuleID,
            PromotionCampaignID,
            SpendingTransactionID,
            MemberRewardID,
            CreateTime
        )
        OUTPUT INSERTED.PointTransactionID Into @CrmMemberPointTransactionID(PointTransactionID)
            SELECT
                TransactionDate,
                TransactionTime,
                MemberID,
                PointBucketID,
                TransactionType,
                PointMovement ,PointBalance,
                DescriptionEN ,DescriptionTC,
                RelatedTransactionID,
                CampaignRewardID,
                PromotionRuleID,
                PromotionCampaignID,
                SpendingTransactionID,
                MemberRewardID,
                CreateTime
            FROM @CrmMemberPointTransaction
        ;
        --merge point transaction id to @CrmViewModelMemberTransaction
        MERGE INTO @CrmViewModelMemberTransaction AS MemberTransaction
            USING @CrmMemberPointTransactionID AS PointTransactionID
                ON MemberTransaction.ID = PointTransactionID.ID
        WHEN MATCHED THEN
            UPDATE SET MemberTransaction.PointTransactionID = PointTransactionID.PointTransactionID
        ;
        --insert member transaction
        MERGE INTO CRM_View_Model_Member_Transaction AS MemberTransaction
            USING @CrmViewModelMemberTransaction AS Temp
                ON
                    MemberTransaction.CitySaverTransactionID = Temp.CitySaverTransactionID AND
                    MemberTransaction.Status = 1
        WHEN MATCHED THEN
            UPDATE SET
                MemberTransaction.UpdateTime         = Temp.UpdateTime,
                MemberTransaction.Status             = Temp.Status,
                MemberTransaction.PointMovement      = Temp.PointMovement,
                MemberTransaction.TransactionDate    = Temp.TransactionDate,
                MemberTransaction.TransactionTime    = Temp.TransactionTime,
                MemberTransaction.SubmitDate         = Temp.SubmitDate,
                MemberTransaction.SubmitTime         = Temp.SubmitTime,
                MemberTransaction.ApproveDate        = Temp.ApproveDate,
                MemberTransaction.ApproveTime        = Temp.ApproveTime,
                MemberTransaction.ReceiptDate        = Temp.ReceiptDate,
                MemberTransaction.PointTransactionID = Temp.PointTransactionID,
                MemberTransaction.InvoiceNo          = Temp.InvoiceNo
        WHEN NOT MATCHED THEN
            INSERT
            (
                CreateTime,
                UpdateTime,
                MemberID,
                TitleEN,
                TitleTC,
                SubtitleEN,
                SubtitleTC,
                Status,
                PointMovement,
                TransactionDate,
                TransactionTime,
                SubmitDate,
                SubmitTime,
                ApproveDate,
                ApproveTime,
                ReceiptDate,
                PointTransactionID,
                CitySaverTransactionID,
                InvoiceNo
            )
            VALUES
            (
                Temp.CreateTime,
                Temp.UpdateTime,
                Temp.MemberID,
                Temp.TitleEN,
                Temp.TitleTC,
                Temp.SubtitleEN,
                Temp.SubtitleTC,
                Temp.Status,
                Temp.PointMovement,
                Temp.TransactionDate,
                Temp.TransactionTime,
                Temp.SubmitDate,
                Temp.SubmitTime,
                Temp.ApproveDate,
                Temp.ApproveTime,
                Temp.ReceiptDate,
                Temp.PointTransactionID,
                Temp.CitySaverTransactionID,
                Temp.InvoiceNo
            )
        ;

        MERGE INTO CRM_View_Model_Member_Transaction AS MemberTransaction
            USING @CrmViewModelMemberTransaction_Temp AS Temp
                ON
                    MemberTransaction.CitySaverTransactionID = Temp.CitySaverTransactionID AND
                    MemberTransaction.Status = 1
        WHEN MATCHED THEN
            UPDATE SET
                MemberTransaction.UpdateTime         = @CurrentDateTime,
                MemberTransaction.Status             = Temp.Status,
                MemberTransaction.ApproveDate        = @CurrentDate,
                MemberTransaction.ApproveTime        = @CurrentDateTime
        ;

        --update member point bucket
        MERGE INTO CRM_Member_Point_Bucket
            USING @CrmMemberPointBucket AS CrmMemberPointBucket
                ON
                    CRM_Member_Point_Bucket.MemberID = CrmMemberPointBucket.MemberID AND
                    CRM_Member_Point_Bucket.PointBucketID = CrmMemberPointBucket.PointBucketID
        WHEN MATCHED THEN
            UPDATE SET
                CRM_Member_Point_Bucket.PointBalance     = CrmMemberPointBucket.PointBalance,
                CRM_Member_Point_Bucket.UpdateTime       = CrmMemberPointBucket.UpdateTime,
                CRM_Member_Point_Bucket.SyncedToD365     = CrmMemberPointBucket.SyncedToD365,
                CRM_Member_Point_Bucket.TotalPointEarned = CrmMemberPointBucket.TotalPointEarned
        ;
    END
END


GO

