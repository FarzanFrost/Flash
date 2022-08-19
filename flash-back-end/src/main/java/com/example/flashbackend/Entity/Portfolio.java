package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
public class Portfolio {

    @Id
    private BigInteger PortfolioID;

    private String Location;

    private String MessageContent;

    private String ContentType;

    public Portfolio(){}

    public Portfolio(BigInteger portfolioID, String location, String messageContent, String contentType) {
        PortfolioID = portfolioID;
        Location = location;
        MessageContent = messageContent;
        ContentType = contentType;
    }

    public BigInteger getPortfolioID() {
        return PortfolioID;
    }

    public void setPortfolioID(BigInteger portfolioID) {
        PortfolioID = portfolioID;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public String getMessageContent() {
        return MessageContent;
    }

    public void setMessageContent(String messageContent) {
        MessageContent = messageContent;
    }

    public String getContentType() {
        return ContentType;
    }

    public void setContentType(String contentType) {
        ContentType = contentType;
    }
}
