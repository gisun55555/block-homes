package com.blockhomes.tradings.repository.item;

import com.blockhomes.tradings.dto.item.request.GetLikeItemsReq;
import com.blockhomes.tradings.dto.item.request.ListItemReq;
import com.blockhomes.tradings.dto.item.request.OwnerItemReq;
import com.blockhomes.tradings.dto.item.response.ListItemInstance;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface ItemRepositoryCustom {

    List<ListItemInstance> listItemsByFiltering(ListItemReq req);

    List<ListItemInstance> listItemsByLikes(GetLikeItemsReq req);

    List<ListItemInstance> listItemsByOwner(OwnerItemReq req);

}
