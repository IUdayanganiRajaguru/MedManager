package com.finalproject.med_manager.model;

import javax.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private  String firstName;

    @Column(nullable = false)
    private  String lastName;

    @Column(nullable = false)
    private  Integer age;

    @Column(nullable = false)
    private  String faculty;

    @Column(nullable = false)
    private  String gender;

    @Column(nullable = true)
    private  String email;

    @Column(nullable = false)
    private  String address;

    @Column(nullable = false)
    private  String contactNumber;

    @Column(nullable = false)
    private  String stayingPlace;

    @Column(nullable = false)
    private  Integer height;

    @Column(nullable = false)
    private Integer weight;

    @Column(nullable = true)
    private  String chronicDisease;

    @Column(nullable = true)
    private  String allergies;

    public Student() {
    }

    public Student(String firstName, String lastName, Integer age, String faculty, String gender, String email, String address, String contactNumber, String stayingPlace, Integer height, Integer weight, String chronicDisease, String allergies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.faculty = faculty;
        this.gender = gender;
        this.email = email;
        this.address = address;
        this.contactNumber = contactNumber;
        this.stayingPlace = stayingPlace;
        this.height = height;
        this.weight = weight;
        this.chronicDisease = chronicDisease;
        this.allergies = allergies;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getStayingPlace() {
        return stayingPlace;
    }

    public void setStayingPlace(String stayingPlace) {
        this.stayingPlace = stayingPlace;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getChronicDisease() {
        return chronicDisease;
    }

    public void setChronicDisease(String chronicDisease) {
        this.chronicDisease = chronicDisease;
    }

    public String getAllergies() {
        return allergies;
    }

    public void setAllergies(String allergies) {
        this.allergies = allergies;
    }
}
