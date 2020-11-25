package com.finalproject.med_manager.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "prescription")
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Date issuedDate;

    @Column(nullable = false)
    private String diagnosis;

    @Column(nullable = false)
    private String symptoms;


    @OneToMany(mappedBy ="prescription")
    private List<DrugIssuing> drugIssuing;

    @ManyToOne
    private User doctor;

    @ManyToOne
    private Student student;

    public Prescription() {
    }

    public Prescription(Date issuedDate, String diagnosis, String symptoms,DrugIssuing DrugIssuing, User doctorId, Student studentId) {
        this.issuedDate = issuedDate;
        this.diagnosis = diagnosis;
        this.symptoms = symptoms;
        this.drugIssuing= drugIssuing;
        this.doctor=doctor;
        this.student=student;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getIssuedDate() {
        return issuedDate;
    }

    public void setIssuedDate(Date issuedDate) {
        this.issuedDate = issuedDate;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public List<DrugIssuing> getDrugIssuingId() {
        return drugIssuing;
    }

    public void setDrugIssuingId(List<DrugIssuing> drugIssuing) {
        this.drugIssuing = drugIssuing;
    }

    public User getDoctor() {
        return doctor;
    }

    public void setDoctor(User doctor) {
        this.doctor = doctor;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudentId(Student student) {
        this.student = student;
    }
}

