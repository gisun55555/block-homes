package com.blockhomes.tradings.dto.item.response;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetLikeItemsRes {

    List<ListItemInstance> likedItems;
    Integer count;

}
