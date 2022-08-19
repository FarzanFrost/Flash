package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
public class GalleryImages {

    @Id
    private BigInteger ImageID;

    private BigInteger EventID;

    public GalleryImages(){}

    public GalleryImages(BigInteger imageID, BigInteger eventID) {
        ImageID = imageID;
        EventID = eventID;
    }

    public BigInteger getImageID() {
        return ImageID;
    }

    public void setImageID(BigInteger imageID) {
        ImageID = imageID;
    }

    public BigInteger getEventID() {
        return EventID;
    }

    public void setEventID(BigInteger eventID) {
        EventID = eventID;
    }
}
