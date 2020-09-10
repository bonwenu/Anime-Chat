package com.chat.projects.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.chat.projects.models.ApplicationUser;
import com.chat.projects.services.ApplicationUserDetailsService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	ApplicationUserDetailsService appUsertDetailsService;
	
	@PostMapping("/register")
    public void signUp(@RequestBody ApplicationUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        appUsertDetailsService.createUser(user);
    }
	
	@GetMapping("/{username}")
	public ApplicationUser getAccountByUsername(@PathVariable String username) {
		return appUsertDetailsService.getAccountByUsername(username);
	}
}
