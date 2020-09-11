package com.chat.projects.controllers;

import java.sql.SQLIntegrityConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.chat.projects.models.ApplicationUser;
import com.chat.projects.models.Message;
import com.chat.projects.services.ApplicationUserDetailsService;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	ApplicationUserDetailsService appUsertDetailsService;
	
	@PostMapping("/register")
    public Message signUp(@RequestBody ApplicationUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        boolean isValid = false;
        try {
	        ApplicationUser au = appUsertDetailsService.createUser(user);
	        
	        if(au != null) {
	        	isValid = true;
	        	return new Message(isValid, "User was successfuly registered");
	        }
        }
        catch(Exception e) {
        	System.out.println(e);
        }
        return new Message(isValid, "This username or email already is attached to an account.");
    }
	
	@GetMapping("/{username}")
	public ApplicationUser getAccountByUsername(@PathVariable String username) {
		return appUsertDetailsService.getAccountByUsername(username);
	}
}
