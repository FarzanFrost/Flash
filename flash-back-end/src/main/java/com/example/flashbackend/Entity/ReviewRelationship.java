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

        public ReviewRelationshipId(BigInteger reviewsID, BigInteger customerID, BigInteger eventID) {
            ReviewsID = reviewsID;
            CustomerID = customerID;
            EventID = eventID;
        }

        public BigInteger getReviewsID() {
            return ReviewsID;
        }

        public void setReviewsID(BigInteger reviewsID) {
            ReviewsID = reviewsID;
        }

        public BigInteger getCustomerID() {
            return CustomerID;
        }

        public void setCustomerID(BigInteger customerID) {
            CustomerID = customerID;
        }

        public BigInteger getEventID() {
            return EventID;
        }

        public void setEventID(BigInteger eventID) {
            EventID = eventID;
        }
    }

}
