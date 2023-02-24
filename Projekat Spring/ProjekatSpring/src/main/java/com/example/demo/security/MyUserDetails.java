package com.example.demo.security;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import model.Korisnik;

@SuppressWarnings("serial")
public class MyUserDetails implements UserDetails {
	
	private String imeKorisnika;
	private String email;
	private String sifra;
	private List<GrantedAuthority> authorities;

	public MyUserDetails(Korisnik k) {
		this.imeKorisnika=k.getImeKorisnika();
		this.email= k.getEmail();
		this.sifra= k.getSifra();

		String role = k.getUloga() == null? "gost" : k.getUloga().getImeUloge();
		
		this.authorities = Arrays.asList(new SimpleGrantedAuthority("ROLE_" + role));
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public String getImeKorisnika() {
		return imeKorisnika;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getSifra() {
		return sifra;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

	
	

}