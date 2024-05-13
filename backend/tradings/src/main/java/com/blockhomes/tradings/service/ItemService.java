package com.blockhomes.tradings.service;

import com.blockhomes.tradings.dto.item.request.LikeItemReq;
import com.blockhomes.tradings.dto.item.request.ListItemReq;
import com.blockhomes.tradings.dto.item.request.RegisterItemReq;
import com.blockhomes.tradings.dto.item.response.DetailItemRes;
import com.blockhomes.tradings.dto.item.response.LikeItemRes;
import com.blockhomes.tradings.dto.item.response.ListItemRes;
import com.blockhomes.tradings.dto.item.response.RegisterItemRes;
import org.springframework.web.multipart.MultipartFile;

public interface ItemService {

    RegisterItemRes registerItem(RegisterItemReq req, MultipartFile mainImage, MultipartFile[] roomImages, MultipartFile[] kitchenToiletImages);

    ListItemRes listItems(ListItemReq req);

    DetailItemRes getDetailItem(Integer itemNo);

//    LikeItemRes likeItem(LikeItemReq req);

}
