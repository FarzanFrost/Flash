package com.example.flashbackend.DTO;

import java.sql.Date;

public class AddBankDetail {

    private String firstName;

    private String lastName;

    private String gender;

    private String nic;

    private String contactNo;

    private Integer cardNo;

    private Integer cvcNo;

    private Date expiaryDate;

    private String cardType;

    public AddBankDetail(String firstName, String lastName, String gender, String nic, String contactNo, Integer cardNo, Integer cvcNo, Date expiaryDate, String cardType){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.nic = nic;
        this.contactNo = contactNo;
        this.cardNo = cardNo;
        this.cvcNo = cvcNo;
        this.expiaryDate = expiaryDate;
        this.cardType = cardType;
    }

    public AddBankDetail(String firstName, String lastName, String gender, String nic, String contactNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.nic = nic;
        this.contactNo = contactNo;
    }

    public AddBankDetail(){

    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getGender() {
        return gender;
    }

    public String getNIC() {
        return nic;
    }

    public String getContactNo() {
        return contactNo;
    }

    public Integer getCardNo() {
        return cardNo;
    }

    public Integer getCVCNo() {
        return cvcNo;
    }

    public Date getExpiaryDate() {
        return expiaryDate;
    }

    public String getCardType() {
        return cardType;
    }

}
