package com.finalproject.med_manager.controller;

import com.finalproject.med_manager.exception.ResourceNotFoundException;
import com.finalproject.med_manager.model.User;
import com.finalproject.med_manager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    private  final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //get all Users
    @GetMapping("/User")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    //create User REST API
    @PostMapping("/User")
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }

    //get User by id REST API
    @GetMapping("/User/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not Exist with id :" +id));
        return ResponseEntity.ok(user);
    }

    //update User REST API
    @PutMapping("/User/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User userDetails) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not Exist with id :" +id));

        user.setName(userDetails.getName());
        user.setRole(userDetails.getRole());
        user.setContactNumber(userDetails.getContactNumber());
        user.setEmail(userDetails.getEmail());
        user.setGender(userDetails.getGender());
        user.setAge(userDetails.getAge());
        user.setQualifications(userDetails.getQualifications());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    //delete User REST API
    @DeleteMapping("/User/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Integer id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not Exist with id :" +id));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
