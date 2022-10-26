package com.example.flashbackend.DTO;

import java.math.BigInteger;

public class DeleteEvent {
    private BigInteger eventID;

    public DeleteEvent(BigInteger eventID) {
        this.eventID = eventID;
    }

    public DeleteEvent() {
    }

    public BigInteger getEventID() {
        return eventID;
    }
}
