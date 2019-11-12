﻿using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.Services.Contrac
{
    public interface IDeliveryService
    {
        Task<DeliveryListResponse> getlist(DeliveryListRequest deliveryListRequest);
        Task<CrmEntity> get(DeliveryDetailRequest deliveryDetailRequest);

        Task<CollectionListResponse> getcollections(CollectionListRequest collectionListRequest);

        Task<CrmEntity> getorderpay(CollectionDetailRequest collectionDetailRequest);
    }
}
