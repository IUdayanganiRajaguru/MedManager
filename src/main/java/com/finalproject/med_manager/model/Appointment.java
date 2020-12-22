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
    private String comments;

    @Column(nullable = false)
    private Date consultDate;

    @Column(nullable = false)
    private Time consultTime;

    @Column(nullable = false)
    private Boolean currentStatus;

    @JoinColumn(name = "student_id", nullable = false)
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    private Student student;

    public Appointment() {
    }

    public Appointment(Date date, String symptoms, String comments, Date consultDate, Time consultTime, Boolean currentStatus,Student student) {
        this.date = date;
        this.symptoms = symptoms;
        this.comments = comments;
        this.consultDate = consultDate;
        this.consultTime = consultTime;
        this.currentStatus = currentStatus;
        this.student = student;
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

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Date getConsultDate() {
        return consultDate;
    }

    public void setConsultDate(Date consultDate) {
        this.consultDate = consultDate;
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

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
