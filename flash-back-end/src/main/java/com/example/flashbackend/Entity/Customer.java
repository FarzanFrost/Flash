package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;
import java.sql.Date;

@Entity
public class Customer {

    @Id
    private BigInteger CustomerID;

    private String FirstName;

    private String LastName;

    private String Gender;

    private String NIC;

    private String ContactNo;

    private int CardNo;

    private int CVCNo;

    private Date ExpiaryDate;

    private String CardType;

    public Customer(){}

    public Customer(BigInteger customerID, String firstName, String lastName, String gender, String NIC, String contactNo, int cardNo, int CVCNo, Date expiaryDate, String cardType) {
        CustomerID = customerID;
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

    public int getCardNo() {
        return CardNo;
    }

    public void setCardNo(int cardNo) {
        CardNo = cardNo;
    }

    public int getCVCNo() {
        return CVCNo;
    }

    public void setCVCNo(int CVCNo) {
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
