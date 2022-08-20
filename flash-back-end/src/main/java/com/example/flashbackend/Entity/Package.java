package com.example.flashbackend.Entity;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
public class Package {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger PackageID;

    private String Frame;

    private int Videographer;

    private int Photographer;

    private boolean Calender;

    private String Name;

    private int Pages;

    private float ExtraPagesPrice;

    private String OutshootType;

    private boolean SignatureFrame;

    private String AlbumDesign;

    private float TotalPayment;

    private String EventType;

    private String Additional;

    @OneToMany( mappedBy = "aPackage" )
    private List<Event> events;

    public Package(){}

    public Package(String frame, int videoGrapher, int photographer, boolean calender, String name, int pages, float extraPagesPrice, String outshootType, boolean signatureFrame, String albumDesign, float totalPayment, String eventType, String additional) {
        Frame = frame;
        Videographer = videoGrapher;
        Photographer = photographer;
        Calender = calender;
        Name = name;
        Pages = pages;
        ExtraPagesPrice = extraPagesPrice;
        OutshootType = outshootType;
        SignatureFrame = signatureFrame;
        AlbumDesign = albumDesign;
        TotalPayment = totalPayment;
        EventType = eventType;
        Additional = additional;
    }

    public BigInteger getPackageID() {
        return PackageID;
    }

    public void setPackageID(BigInteger packageID) {
        PackageID = packageID;
    }

    public String getFrame() {
        return Frame;
    }

    public void setFrame(String frame) {
        Frame = frame;
    }

    public int getVideoGrapher() {
        return Videographer;
    }

    public void setVideoGrapher(int videoGrapher) {
        Videographer = videoGrapher;
    }

    public int getPhotographer() {
        return Photographer;
    }

    public void setPhotographer(int photographer) {
        Photographer = photographer;
    }

    public boolean isCalender() {
        return Calender;
    }

    public void setCalender(boolean calender) {
        Calender = calender;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getPages() {
        return Pages;
    }

    public void setPages(int pages) {
        Pages = pages;
    }

    public float getExtraPagesPrice() {
        return ExtraPagesPrice;
    }

    public void setExtraPagesPrice(float extraPagesPrice) {
        ExtraPagesPrice = extraPagesPrice;
    }

    public String getOutshootType() {
        return OutshootType;
    }

    public void setOutshootType(String outshootType) {
        OutshootType = outshootType;
    }

    public boolean isSignatureFrame() {
        return SignatureFrame;
    }

    public void setSignatureFrame(boolean signatureFrame) {
        SignatureFrame = signatureFrame;
    }

    public String getAlbumDesign() {
        return AlbumDesign;
    }

    public void setAlbumDesign(String albumDesign) {
        AlbumDesign = albumDesign;
    }

    public float getTotalPayment() {
        return TotalPayment;
    }

    public void setTotalPayment(float totalPayment) {
        TotalPayment = totalPayment;
    }

    public String getEventType() {
        return EventType;
    }

    public void setEventType(String eventType) {
        EventType = eventType;
    }

    public String getAdditional() {
        return Additional;
    }

    public void setAdditional(String additional) {
        Additional = additional;
    }

    public int getVideographer() {
        return Videographer;
    }

    public void setVideographer(int videographer) {
        Videographer = videographer;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }
}
