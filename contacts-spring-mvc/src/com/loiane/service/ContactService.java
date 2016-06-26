package com.loiane.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.loiane.dao.ContactDAO;
import com.loiane.model.Contact;

/**
 * Contact Service
 * 
 * @author Loiane Groner
 * http://loiane.com (Portuguese)
 */
@Service
public class ContactService {
	
	private ContactDAO contactDAO;

	/**
	 * Get all contacts
	 * @return
	 */
	@Transactional(readOnly=true)
	public List<Contact> getContactList(int start, int limit){
		
		return contactDAO.getContacts(start, limit);
	}
	
	/**
	 * Create new Contact/Contacts
	 * @param data - json data from request
	 * @return created contacts
	 */
	@Transactional
	public List<Contact> create(Contact contact){
		
        List<Contact> newContacts = new ArrayList<Contact>();
		
		newContacts.add(contactDAO.saveContact(contact));
		
		return newContacts;
	}
	
	
	/**
	 * Update contact/contacts
	 * @param data - json data from request
	 * @return updated contacts
	 */
	@Transactional
	public List<Contact> update(Contact contact){
		
		List<Contact> returnContacts = new ArrayList<Contact>();
		
		returnContacts.add(contactDAO.saveContact(contact));
		
		return returnContacts;
	}
	
	/**
	 * Delete contact/contacts
	 * @param contact - json data from request
	 */
	@Transactional
	public void delete(Contact contact){
		
		contactDAO.deleteContact(contact.getId());
	}
	
	/**
	 * Get total of Contacts from database.
	 * Need to set this value on ExtJS Store
	 * @return
	 */
	public int getTotalContacts(){

		return contactDAO.getTotalContacts();
	}

	/**
	 * Spring use - DI
	 * @param contactDAO
	 */
	@Autowired
	public void setContactDAO(ContactDAO contactDAO) {
		this.contactDAO = contactDAO;
	}
	
}
