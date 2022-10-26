package com.example.flashbackend.DTO;

import java.math.BigInteger;

public class AddPhotos {

    private BigInteger eventID;

    private String imageUrl;

    public BigInteger getEventID() {
        return eventID;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public AddPhotos(BigInteger eventID, String imageUrl) {
        this.eventID = eventID;
        this.imageUrl = imageUrl;
    }
}
