package com.example.flashbackend.DTO;

public class AddPackages {

    private String frame;

    private int videographer;

    private int photographer;

    private boolean calender;

    private String name;

    private int pages;

    private float extraPagesPrice;

    private String outShootType;

    private boolean signatureFrame;

    private String albumDesign;

    private float totalPayment;

    private String eventType;

    private String additional;

    public AddPackages(String frame, int videographer, int photographer, boolean calender, String name, int pages, float extraPagesPrice, String outShootType, boolean signatureFrame, String albumDesign, float totalPayment, String eventType, String additional) {
        this.frame = frame;
        this.videographer = videographer;
        this.photographer = photographer;
        this.calender = calender;
        this.name = name;
        this.pages = pages;
        this.extraPagesPrice = extraPagesPrice;
        this.outShootType = outShootType;
        this.signatureFrame = signatureFrame;
        this.albumDesign = albumDesign;
        this.totalPayment = totalPayment;
        this.eventType = eventType;
        this.additional = additional;
    }

    public String getFrame() {
        return frame;
    }

    public int getVideographer() {
        return videographer;
    }

    public int getPhotographer() {
        return photographer;
    }

    public boolean isCalender() {
        return calender;
    }

    public String getName() {
        return name;
    }

    public int getPages() {
        return pages;
    }

    public float getExtraPagesPrice() {
        return extraPagesPrice;
    }

    public String getOutShootType() {
        return outShootType;
    }

    public boolean isSignatureFrame() {
        return signatureFrame;
    }

    public String getAlbumDesign() {
        return albumDesign;
    }

    public float getTotalPayment() {
        return totalPayment;
    }

    public String getEventType() {
        return eventType;
    }

    public String getAdditional() {
        return additional;
    }
}
