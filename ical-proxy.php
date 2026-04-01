<?php
/**
 * ical-proxy.php – 4U Centre Apartments
 * Veřejný endpoint pro zákaznickou stránku (public_dates)
 * Všechna ostatní logika je nyní v admin.php
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

define('DATA_FILE', __DIR__ . '/4u_bookings_data.json');

// Veřejná obsazená data pro kalendarc.htm
if (isset($_GET['action']) && $_GET['action'] === 'public_dates') {
    $data = file_exists(DATA_FILE) ? json_decode(file_get_contents(DATA_FILE), true) : [];
    echo json_encode($data['publicDates'] ?? ['A' => [], 'B' => []]);
    exit;
}

// Fallback – vše ostatní směruj na admin.php
echo json_encode(['error' => 'Pouzijte admin.php pro spravci operace.']);
