package com.finalproject.med_manager.controller;

import com.finalproject.med_manager.model.Staff_member;
import com.finalproject.med_manager.repository.Staff_memberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("api/v1/")
public class Staff_memberController {

    private final Staff_memberRepository staff_memberRepository;

    @Autowired
    public Staff_memberController(Staff_memberRepository staff_memberRepository) {
        this.staff_memberRepository = staff_memberRepository;
    }

    // get all staff_members
    @GetMapping("/staff_members")
    public List<Staff_member> getAllStaff_members(){

        return staff_memberRepository.findAll();
    }
}
