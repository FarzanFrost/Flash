package com.example.flashbackend.Entity;

import javax.persistence.*;
import java.math.BigInteger;
import java.sql.Timestamp;

@Entity
public class Chat {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger ChatId;

    private Timestamp DateTime;

    private String Content;

    private boolean IsMessageFromManager;

    @ManyToOne
    @JoinColumn( name = "CustomerID")
    private Customer customer;

    public Chat(){}

    public Chat(Timestamp dateTime, String content) {
        DateTime = dateTime;
        Content = content;
    }

    public BigInteger getChatId() {
        return ChatId;
    }

    public void setChatId(BigInteger chatId) {
        ChatId = chatId;
    }

    public Timestamp getDateTime() {
        return DateTime;
    }

    public void setDateTime(Timestamp dateTime) {
        DateTime = dateTime;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }

    public boolean isMessageFromManager() {
        return IsMessageFromManager;
    }

    public void setMessageFromManager(boolean messageFromManager) {
        IsMessageFromManager = messageFromManager;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
