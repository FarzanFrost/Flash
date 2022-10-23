package com.example.flashbackend.DTO;

import java.sql.Date;

public class AddBankDetail {

    private Integer cardNo;

    private Integer CVCNo;

    private Date expiaryDate;

    private String cardType;

    public AddBankDetail(Integer cardNo, Integer CVCNo, Date expiaryDate, String cardType){
        this.cardNo = cardNo;
        this.CVCNo = CVCNo;
        this.expiaryDate = expiaryDate;
        this.cardType = cardType;
    }

    public Integer getCardNo() {
        return cardNo;
    }

    public Integer getCVCNo() {
        return CVCNo;
    }

    public Date getExpiaryDate() {
        return expiaryDate;
    }

    public String getCardType() {
        return cardType;
    }

}
