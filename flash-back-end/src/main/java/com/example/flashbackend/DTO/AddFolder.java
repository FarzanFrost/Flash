package com.example.flashbackend.DTO;

import java.math.BigInteger;

public class AddFolder {
    private BigInteger eventID;
    private String name;

    public AddFolder(BigInteger eventID, String name) {
        this.eventID = eventID;
        this.name = name;
    }

    public BigInteger getEventID() {
        return eventID;
    }

    public String getName() {
        return name;
    }
}
