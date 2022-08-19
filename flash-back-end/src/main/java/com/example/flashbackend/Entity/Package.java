package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
public class Package {

    @Id
    private BigInteger PackageID;

    private String Frame;

    private int VideoGrapher;

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

    public Package(){}

    public Package(BigInteger packageID, String frame, int videoGrapher, int photographer, boolean calender, String name, int pages, float extraPagesPrice, String outshootType, boolean signatureFrame, String albumDesign, float totalPayment, String eventType, String additional) {
        PackageID = packageID;
        Frame = frame;
        VideoGrapher = videoGrapher;
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
        return VideoGrapher;
    }

    public void setVideoGrapher(int videoGrapher) {
        VideoGrapher = videoGrapher;
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
}
