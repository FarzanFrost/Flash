package com.example.flashbackend.DTO;

public class AddReview {

    private String comment;

    private Integer rate;

    private Boolean deleted;

    public AddReview(String comment, Integer rate, Boolean deleted){
        this.comment = comment;
        this.rate = rate;
        this.deleted = deleted;
    }

    public String getComment() {
        return comment;
    }

    public Integer getRate() {
        return rate;
    }

    public Boolean getDeleted() {
        return deleted;
    }

}
