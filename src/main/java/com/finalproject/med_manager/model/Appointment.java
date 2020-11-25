package com.finalproject.med_manager.model;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private  String symptoms;

    @Column(nullable = true)
    private String comment;

    @Column(nullable = false)
    private Time consultTime;

    @Column(nullable = false)
    private Boolean currentStatus;

    public Appointment() {
    }

    public Appointment(Date date, String symptoms, String comment, Time consultTime, Boolean currentStatus) {
        this.date = date;
        this.symptoms = symptoms;
        this.comment = comment;
        this.consultTime = consultTime;
        this.currentStatus = currentStatus;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Time getConsultTime() {
        return consultTime;
    }

    public void setConsultTime(Time consultTime) {
        this.consultTime = consultTime;
    }

    public Boolean getCurrentStatus() {
        return currentStatus;
    }

    public void setCurrentStatus(Boolean currentStatus) {
        this.currentStatus = currentStatus;
    }
}
