package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
public class Discounts {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger DiscountsID;

    private String SerialNo;

    private int Percentage;

    private boolean Used;

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
