package com.example.flashbackend.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.math.BigInteger;
import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class,property = "customerID")
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

    @OneToOne(mappedBy = "customer")
    private Login login;

    @OneToMany( mappedBy = "aCustomer")
    private List<Event> events;

    @OneToMany( mappedBy = "customer")
    private List<Discounts> discounts;

    @OneToMany( mappedBy = "customer" )
    private List<Chat> chats;

    @OneToMany( mappedBy = "customer")
    @JsonIgnore
    Set<ReviewRelationship> reviewRelationships = new HashSet<>();

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

    /*public Customer(BigInteger customerID, String firstName, String lastName, String gender, String NIC, String contactNo, Integer cardNo, Integer CVCNo, Date expiaryDate, String cardType) {
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
    }*/

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

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public List<Discounts> getDiscounts() {
        return discounts;
    }

    public void setDiscounts(List<Discounts> discounts) {
        this.discounts = discounts;
    }

    public List<Chat> getChats() {
        return chats;
    }

    public void setChats(List<Chat> chats) {
        this.chats = chats;
    }

}
