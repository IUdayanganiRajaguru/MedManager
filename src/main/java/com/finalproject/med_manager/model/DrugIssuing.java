package com.finalproject.med_manager.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "drugIssuing")
public class DrugIssuing {

    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //problem
    @ManyToMany(mappedBy = "drugIssuing")
    private List<Stock> stock;

    @Column(nullable = false)
    private String dosage;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Integer quantity;

    @ManyToOne
    private Prescription prescription;

    public DrugIssuing(List<Stock> stock, String dosage, String description, Integer quantity, Prescription prescription) {
        this.stock = stock;
        this.dosage = dosage;
        this.description = description;
        this.quantity = quantity;
        this.prescription = prescription;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<Stock> getStock() {
        return stock;
    }

    public void setStock(List<Stock> stock) {
        this.stock = stock;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Prescription getPrescription() {
        return prescription;
    }

    public void setPrescription(Prescription prescription) {
        this.prescription = prescription;
    }
}


