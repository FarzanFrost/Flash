package com.example.flashbackend.DTO;

import java.math.BigInteger;
import java.sql.Date;
import java.sql.Time;


public class AddEvent {
    private Date eventDate;

    private Time startTime;

    private Time endTime;

    private String status;

    private String advancedAmount;

    private String address;

    private String latitude;

    private String longitude;

    private Integer extraPage;

    private String category;

    private Boolean delivered;

    private BigInteger customerId;

    private BigInteger packageId;

    public AddEvent (Date eventDate, Time startTime, Time endTime, String status, String advancedAmount, BigInteger customerId, BigInteger packageId, String address, String latitude, String longitude, Integer extraPage, String category, Boolean delivered){
        this.eventDate = eventDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
        this.advancedAmount = advancedAmount;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.extraPage = extraPage;
        this.category = category;
        this.delivered = delivered;
        this.customerId = customerId;
        this.packageId = packageId;
    }


    public AddEvent() {
    }

    public Date getEventDate() {
        return eventDate;
    }

//    public void setEventDate(Date eventDate) {
//        this.eventDate = eventDate;
//    }

    public Time getStartTime() {
        return startTime;
    }

//    public void setStartTime(Time startTime) {
//        this.startTime = startTime;
//    }

    public Time getEndTime() {
        return endTime;
    }

//    public void setEndTime(Time endTime) {
//        this.endTime = endTime;
//    }

    public String getStatus() {
        return status;
    }

//    public void setStatus(String status) {
//        this.status = status;
//    }

    public String getAdvancedAmount() {
        return advancedAmount;
    }

//    public void setAdvancedAmount(Float advancedAmount) {
//        this.advancedAmount = advancedAmount;
//    }

    public BigInteger getCustomerId() {
        return customerId;
    }

//    public void setCustomerId(BigInteger customerId) {
//        this.customerId = customerId;
//    }

    public BigInteger getPackageId() {
        return packageId;
    }

//    public void setPackageId(BigInteger packageId) {
//        this.packageId = packageId;
//    }

    public String getAddress() {
        return address;
    }

//    public void setAddress(String address) {
//        this.address = address;
//    }

    public String getLatitude() {
        return latitude;
    }

//    public void setLatitude(String latitude) {
//        this.latitude = latitude;
//    }

    public String getLongitude() {
        return longitude;
    }

//    public void setLongitude(String longitude) {
//        this.longitude = longitude;
//    }

    public Integer getExtraPage() {
        return extraPage;
    }

//    public void setExtraPage(Integer extraPage) {
//        this.extraPage = extraPage;
//    }

    public String getCategory() {
        return category;
    }

//    public void setCategory(String category) {
//        this.category = category;
//    }

    public Boolean getDelivered() {
        return delivered;
    }

//    public void setDelivered(Integer delivered) {
//        this.delivered = delivered;
//    }
//
}
