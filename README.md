# coffeepoints

This is a smartphone app which uses a points system to reward cafe customers who opt to bring in their personal mug.

<b> Non-technical description: </b>

If the customer opts out of using a disposable cup, the cashier will show a badge with a QR code. Using the app, the customer can scan this badge to earn a point. The app keeps track of the user's points.

Points can be redeemed for drinks tokens. The user must go online to be able to convert 10 points into a token.

A token can be used to earn a free drink of the user's choice. If he wants to spend one of his tokens, the app will display a voucher on the screen. The cashier can check this voucher to verify the validity. If the cashier is satisfied with this voucher, he will hand over the drink and the token will be deleted from the app. The receipt should be kept by the cashier to be handed over to the university for reimbursement.

<b> Technical details: </b>

From the main menu of the app, the customer can perform the following actions:

- Collect point - This uses the camera and the ZXing package to scan a QR code. Each shop has a unique QR code, which tells the app to increment the points by 1.
- Convert points to tokens - Internet access is required for this function. If the user has enough points, they will be converted into tokens. Note that this is the only action requiring internet, everything else can be done offline.
- Redeem token - The user should hand the phone over to the cashier (who will hold the phone so that the customer see what he is doing on the screen). The cashier will select the shop, and then a voucher will be displayed on the screen. The cashier verifies this is correct, then clicks accept. Upon accepting, the token is permanently used up and no longer usable. This should earn the customer a free drink of his choice.
- Help - A help section should be included to explain how to use the app. Maybe also with some information about why this is environmentally friendly.

<b> Security: </b>

We are sacrificing some level of security in favour of ease of use for both customer and cashier. We expect people will be unlikely to want to cheat the system, but after trialling the app we will have a better idea of whether or not this is the case. Nevertheless we have some security measures:

- Data collection - The app will keep track of all the instances where the customer has collected points or spent tokens, recording both the location and time of transaction. Whenever the user goes online, all of this data will be uploaded to our main server. Note that the user can collect points indefinitely without ever going online, but if he wants to claim a free drink he will have to go online at some point, so at that point we will be up-to-date with the data. Any discrepancies in the data will be flagged for review.
- Login - We could also ask the user to tie his app to his campus ID (i.e. login with his ID as his username). This would strengthen the security significantly, whilst also allowing the user to retrieve his points on other phones and devices.
- Receipts - The cashier will keep the receipts for all free drinks given. These records can also be checked against the stored data for discrepancies.
- Cashier handles redeeming - The purpose of handing the phone over to the cashier when claiming a free drink is so that he can check that this is indeed the app, and not just a photo of a voucher which the customer may have taken with a camera.
- Closed source - The fact that this app is open source will not be an issue, the data collection stuff will be hardcoded into the app externally (not visible on Github) so even if someone were to clone this app from the source, they should not be able to interfere with our data. It IS possible for them to effectively steal free drinks by making their own replica app. Whilst we can not effectively 'catch' the person doing this, we will know when this has happened by checking the receipts against the stored data.
- Refresh QR codes. The cashiers will be given new QR codes on a regular basis. If a customer tries to cheat by using a replica of an old QR code (e.g. one that was captured with a camera), we will know.
- Timers - There will be a short timer (e.g. 5 or 10 seconds) after collecting a point, during which no points can be collected. This prevents someone from holding the scanner and collecting points repeatedly in one instance.

Ideally, all of the above could be avoided if the cashier had their own 'cashier' version of the app, which is how it is done in other countries. But for now we can not expect them to have smartphones.

Test QR code: 

![alt tag](https://cloud.githubusercontent.com/assets/7933725/12876131/85df0ad4-ce0b-11e5-9a9e-9c9845747f73.png)

Current look:

![alt tag](https://cloud.githubusercontent.com/assets/7933725/12876161/2dda21ba-ce0c-11e5-9110-442ba4c20173.png)
