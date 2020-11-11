package com.finalproject.med_manager.repository;

import com.finalproject.med_manager.model.Staff_member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Staff_memberRepository extends JpaRepository<Staff_member, Integer> {
}
