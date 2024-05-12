package com.blockhomes.tradings.entity.item;

import lombok.Getter;

@Getter
public enum ReportRank {
    SAFE(1),
    NORMAL(2),
    DANGER(3);

    private final Integer value;

    ReportRank(Integer value) {
        this.value = value;
    }

    public static ReportRank valueToEnum(Integer value) {
        for (ReportRank r : ReportRank.values()) {
            if (r.getValue().equals(value)) return r;
        }

        return null;
    }

    public static Integer enumToValue(ReportRank reportRank) {
        for (ReportRank r : ReportRank.values()) {
            if (r.equals(reportRank)) return r.getValue();
        }

        return null;
    }

}
