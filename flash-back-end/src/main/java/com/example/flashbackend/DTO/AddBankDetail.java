package com.example.flashbackend.DTO;

import java.sql.Date;

public class AddBankDetail {

    private String FirstName;

    private String LastName;

    private String Gender;

    private String NIC;

    private String ContactNo;

    private Integer CardNo;

    private Integer CVCNo;

    private Date ExpiaryDate;

    private String CardType;

    public AddBankDetail(String FirstName, String LastName, String Gender, String NIC, String ContactNo, Integer CardNo, Integer CVCNo, Date ExpiaryDate, String CardType){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Gender = Gender;
        this.NIC = NIC;
        this.ContactNo = ContactNo;
        this.CardNo = CardNo;
        this.CVCNo = CVCNo;
        this.ExpiaryDate = ExpiaryDate;
        this.CardType = CardType;
    }

    public String getFirstName() {
        return FirstName;
    }

    public String getLastName() {
        return LastName;
    }

    public String getGender() {
        return Gender;
    }

    public String getNIC() {
        return NIC;
    }

    public String getContactNo() {
        return ContactNo;
    }

    public Integer getCardNo() {
        return CardNo;
    }

    public Integer getCVCNo() {
        return CVCNo;
    }

    public Date getExpiaryDate() {
        return ExpiaryDate;
    }

    public String getCardType() {
        return CardType;
    }

}
