package com.chat.projects.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.chat.projects.models.ApplicationUser;
import com.chat.projects.models.Message;
import com.chat.projects.services.ApplicationUserDetailsService;

@RestController
@CrossOrigin(origins = "*")
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
	
	@PutMapping("/{username}")
	public ApplicationUser updateApplicationUser(@RequestBody ApplicationUser user) {
		ApplicationUser appUser = appUsertDetailsService.getAccountByUsername(user.getUsername());
		// If user is found and old password matches, save new one
		if(appUser != null && bCryptPasswordEncoder.matches(user.getPassword(), appUser.getPassword())) {
			appUser.setPassword(bCryptPasswordEncoder.encode(user.getNewPassword()));
			return appUsertDetailsService.updateApplicationUser(appUser);
		}
		return null;
	}
}
