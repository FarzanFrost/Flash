package com.example.flashbackend.DTO;

import com.example.flashbackend.Entity.Event;

import java.sql.Date;
import java.sql.Time;

public class NewEventForm {

    private String event;

    private Date date;

    private Time startTime;

    private Time endTime;

    private String address;

    private String packageName;
    public NewEventForm(){}

    public NewEventForm(String event, Date date, Time startTime, Time endTime, String address, String packageName) {
        this.event = event;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.address = address;
        this.packageName = packageName;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

}
