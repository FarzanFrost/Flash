package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
public class GalleryImages {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger ImageID;

    private BigInteger EventID;

    public GalleryImages(){}

    public GalleryImages(BigInteger eventID) {
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
