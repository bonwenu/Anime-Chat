package com.chat.projects.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.chat.projects.models.ApplicationUser;
import com.chat.projects.repositories.ApplicationUserRepository;

import static java.util.Collections.emptyList;

@Service
public class ApplicationUserDetailsService implements UserDetailsService {
    
	@Autowired
	private ApplicationUserRepository applicationUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        ApplicationUser applicationUser = applicationUserRepository.findByUsername(username);
        if (applicationUser == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(applicationUser.getUsername(), applicationUser.getPassword(), emptyList());
    }
    
    public ApplicationUser createUser(ApplicationUser user) {
    	return applicationUserRepository.save(user);
    }
    
    public ApplicationUser getAccountByUsername(String username) {
    	return applicationUserRepository.findByUsername(username);
    }
}