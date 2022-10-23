package com.example.flashbackend.DTO;

import java.sql.Date;

public class AddBankDetail {

    private Integer cardNo;

    private Integer cvcNo;

    private Date expiaryDate;

    private String cardType;

    public Integer getCardNo() {
        return cardNo;
    }

    public Integer getCvcNo() {
        return cvcNo;
    }

    public Date getExpiaryDate() {
        return expiaryDate;
    }

    public String getCardType() {
        return cardType;
    }

}
