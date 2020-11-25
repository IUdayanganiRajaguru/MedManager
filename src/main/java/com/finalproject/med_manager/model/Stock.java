package com.finalproject.med_manager.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "stock")
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Integer drugCode;

    @Column(nullable = false)
    private String drugName;

    @Column(nullable = true)
    private Integer quantity;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private Date   entryDate;

    @Column(nullable = false)
    private Date   expiryDate;

    @ManyToMany
    private List<DrugIssuing> drugIssuing;

    public Stock() {
    }

    public Stock(Integer drugCode, String drugName, Integer quantity, String category, Date entryDate, Date expiryDate) {
        this.drugCode = drugCode;
        this.drugName = drugName;
        this.quantity = quantity;
        this.category = category;
        this.entryDate = entryDate;
        this.expiryDate = expiryDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDrugCode() {
        return drugCode;
    }

    public void setDrugCode(Integer drugCode) {
        this.drugCode = drugCode;
    }

    public String getDrugName() {
        return drugName;
    }

    public void setDrugName(String drugName) {
        this.drugName = drugName;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(Date entryDate) {
        this.entryDate = entryDate;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public List<DrugIssuing> getDrugIssuing() {
        return drugIssuing;
    }

    public void setDrugIssuing(List<DrugIssuing> drugIssuing) {
        this.drugIssuing = drugIssuing;
    }


    @Override
    public String toString() {
        return "Stock{" +
                "id=" + id +
                ", drugCode=" + drugCode +
                ", drugName='" + drugName + '\'' +
                ", quantity=" + quantity +
                ", category='" + category + '\'' +
                ", entryDate=" + entryDate +
                ", expiryDate=" + expiryDate +
                '}';
    }
}

