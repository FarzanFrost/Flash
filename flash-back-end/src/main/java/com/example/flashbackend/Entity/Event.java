package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigInteger;
import java.sql.Date;
import java.sql.Time;

@Entity
public class Event {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger EventID;

    private String Status;

    private String AdvanceAmount;

    private Date EventDate;

    private Time StartTime;

    private Time EndTime;

    private String Address;

    private String Latitude;

    private String Longitude;

    private int ExtraPage;

    private String Category;

    private boolean Delivered;

    public Event(){}

    public Event(String status, String advanceAmount, Date eventDate, Time startTime, Time endTime, String address, String latitude, String longtitude, int extraPage, String category, boolean delivered) {
        Status = status;
        AdvanceAmount = advanceAmount;
        EventDate = eventDate;
        StartTime = startTime;
        EndTime = endTime;
        Address = address;
        Latitude = latitude;
        Longitude = longtitude;
        ExtraPage = extraPage;
        Category = category;
        Delivered = delivered;
    }

    public BigInteger getEventID() {
        return EventID;
    }

    public void setEventID(BigInteger eventID) {
        EventID = eventID;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public String getAdvanceAmount() {
        return AdvanceAmount;
    }

    public void setAdvanceAmount(String advanceAmount) {
        AdvanceAmount = advanceAmount;
    }

    public Date getEventDate() {
        return EventDate;
    }

    public void setEventDate(Date eventDate) {
        EventDate = eventDate;
    }

    public Time getStartTime() {
        return StartTime;
    }

    public void setStartTime(Time startTime) {
        StartTime = startTime;
    }

    public Time getEndTime() {
        return EndTime;
    }

    public void setEndTime(Time endTime) {
        EndTime = endTime;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getLatitude() {
        return Latitude;
    }

    public void setLatitude(String latitude) {
        Latitude = latitude;
    }

    public String getLongitude() {
        return Longitude;
    }

    public void setLongitude(String longitude) {
        Longitude = longitude;
    }

    public int getExtraPage() {
        return ExtraPage;
    }

    public void setExtraPage(int extraPage) {
        ExtraPage = extraPage;
    }

    public String getCategory() {
        return Category;
    }

    public void setCategory(String category) {
        Category = category;
    }

    public boolean isDelivered() {
        return Delivered;
    }

    public void setDelivered(boolean delivered) {
        Delivered = delivered;
    }
}
