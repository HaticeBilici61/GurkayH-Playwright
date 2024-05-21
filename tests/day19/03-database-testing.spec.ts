import { test, expect } from '@playwright/test';
import { Client } from 'pg'

test('Medunna Database Testing', async () => {
    // Database bağlantısı tanımlanır
    const client = new Client({
        host: "medunna.com",
        port: 5432,
        database: "medunna_db_v2",
        user: "select_user",
        password: "Medunna_pass_@6",
        // connectionString: 'postgresql://select_user:Medunna_pass_@6@medunna.com:5432/medunna_db_v2'
    })

    // Database bağlantısı yapılır
    await client.connect()

    // Query (sorgu) gönderilir ve Response (cevap) alınır
    const result = await client.query("select * from room where room_number = 1")
    const roomData = result.rows[0]

    // Doğrulamalar yapılır
    expect(roomData.room_number).toBe(1)
    expect(roomData.room_type).toEqual('TWIN')
    expect(roomData.status).toBe(true)

    expect(roomData.price).toEqual("100.00") // Yöntem - 1
    expect(parseFloat(roomData.price)).toBeCloseTo(100.00) // Yöntem - 2

    expect(roomData.description).toEqual('New Room For DB Test')
    expect(roomData.created_date).toEqual(new Date('2023-03-05 20:32:33.004836'))
    expect(roomData.created_by).toEqual('adminteam02')
    expect(roomData.last_modified_by).toEqual('adminteam02')
    expect(roomData.last_modified_date).toEqual(new Date('2023-03-05 20:32:33.004836'))
});
