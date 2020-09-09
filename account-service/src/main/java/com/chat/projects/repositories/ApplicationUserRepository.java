package com.chat.projects.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chat.projects.models.ApplicationUser;

public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long> {
    ApplicationUser findByUsername(String username);
    ApplicationUser findByEmail(String email);
}
