package com.finalproject.med_manager.controller;

import com.finalproject.med_manager.exception.ResourceNotFoundException;
import com.finalproject.med_manager.model.Appointment;
import com.finalproject.med_manager.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BooleanSupplier;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class AppointmentController {

    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppointmentController(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    //get all Appointments
    @GetMapping("/Appointment")
    public List<Appointment> getAllAppointments() {
        return  appointmentRepository.findAll();
    }

    //create Appointment REST API
    @PostMapping("/Appointment")
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    //get Appointment by id REST API
    @GetMapping("/Appointment/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable Integer id) {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Appointment not Exist with id :" +id));
        return ResponseEntity.ok(appointment);
    }

    //update Appointment REST API
    @PutMapping("/Appointment/{id}")
    public ResponseEntity<Appointment> updateAppointment(@PathVariable Integer id, @RequestBody Appointment appointmentDetails) {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Appointment not Exist with id :" +id));

        appointment.setDate(appointmentDetails.getDate());
        appointment.setSymptoms(appointmentDetails.getSymptoms());
        appointment.setComment(appointmentDetails.getComment());
        appointment.setConsultTime(appointmentDetails.getConsultTime());
        appointment.setCurrentStatus(appointmentDetails.getCurrentStatus());

        Appointment updatedAppointment = appointmentRepository.save(appointment);
        return ResponseEntity.ok(updatedAppointment);
    }

    //delete Appointment REST API
    @DeleteMapping("/Appointment/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable Integer id) {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Appointment not Exist with id :" +id));

        appointmentRepository.delete(appointment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
