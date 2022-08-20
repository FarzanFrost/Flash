package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigInteger;
import java.sql.Date;

@Entity
public class Customer {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger CustomerID;

    private String FirstName;

    private String LastName;

    private String Gender;

    private String NIC;

    private String ContactNo;

    private Integer CardNo;

    private Integer CVCNo;

    private Date ExpiaryDate;

    private String CardType;

    public Customer(){}

    public Customer(String firstName, String lastName, String gender, String NIC, String contactNo, Integer cardNo, Integer CVCNo, Date expiaryDate, String cardType) {
        FirstName = firstName;
        LastName = lastName;
        Gender = gender;
        this.NIC = NIC;
        ContactNo = contactNo;
        CardNo = cardNo;
        this.CVCNo = CVCNo;
        ExpiaryDate = expiaryDate;
        CardType = cardType;
    }

    public BigInteger getCustomerID() {
        return CustomerID;
    }

    public void setCustomerID(BigInteger customerID) {
        CustomerID = customerID;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getNIC() {
        return NIC;
    }

    public void setNIC(String NIC) {
        this.NIC = NIC;
    }

    public String getContactNo() {
        return ContactNo;
    }

    public void setContactNo(String contactNo) {
        ContactNo = contactNo;
    }

    public Integer getCardNo() {
        return CardNo;
    }

    public void setCardNo(Integer cardNo) {
        CardNo = cardNo;
    }

    public Integer getCVCNo() {
        return CVCNo;
    }

    public void setCVCNo(Integer CVCNo) {
        this.CVCNo = CVCNo;
    }

    public Date getExpiaryDate() {
        return ExpiaryDate;
    }

    public void setExpiaryDate(Date expiaryDate) {
        ExpiaryDate = expiaryDate;
    }

    public String getCardType() {
        return CardType;
    }

    public void setCardType(String cardType) {
        CardType = cardType;
    }
}
