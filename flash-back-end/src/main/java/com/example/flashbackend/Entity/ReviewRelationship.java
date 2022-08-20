package com.example.flashbackend.Entity;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@Entity
public class ReviewRelationship {

    @EmbeddedId
    private ReviewRelationshipId id;

    @ManyToOne
    @MapsId("ReviewsID")
    private Reviews reviews;

    @ManyToOne
    @MapsId("CustomerID")
    private Customer customer;

    @ManyToOne
    @MapsId("EventID")
    private Event event;

    @Embeddable
    public static class ReviewRelationshipId implements Serializable{

        private BigInteger ReviewsID;

        private BigInteger CustomerID;

        private BigInteger EventID;

        public ReviewRelationshipId(){}

    }

}
