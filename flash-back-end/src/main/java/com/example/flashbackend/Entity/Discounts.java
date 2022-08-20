package com.example.flashbackend.Entity;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
public class Discounts {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger DiscountsID;

    private String SerialNo;

    private int Percentage;

    private boolean Used;

    @ManyToOne
    @JoinColumn( name = "CustomerID" )
    private Customer customer;

    public Discounts(){}

    public Discounts(String serialNo, int percentage, boolean used) {
        SerialNo = serialNo;
        Percentage = percentage;
        Used = used;
    }

    public BigInteger getDiscountsID() {
        return DiscountsID;
    }

    public void setDiscountsID(BigInteger discountsID) {
        DiscountsID = discountsID;
    }

    public String getSerialNo() {
        return SerialNo;
    }

    public void setSerialNo(String serialNo) {
        SerialNo = serialNo;
    }

    public int getPercentage() {
        return Percentage;
    }

    public void setPercentage(int percentage) {
        Percentage = percentage;
    }

    public boolean isUsed() {
        return Used;
    }

    public void setUsed(boolean used) {
        Used = used;
    }
}
