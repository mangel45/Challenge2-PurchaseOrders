
var c = 0;
var t;
var timer_is_on = 0;
var submitCount = 0;
var totalPossible = 21;
var numCorrect = 0;
let rows = [
    ["04-073-1793", "Ryan Neises", "1/16/2020", "983.50"],
    ["35-371-6976", "Johnny Reagan", "4/13/2020", "738.35"],
    ["72-138-5492", "Mitch Manders", "3/27/2020", "582.78"],
    ["95-571-9211", "Tim Langer", "9/3/2019", "596.60"],
    ["74-430-1575", "Matthew Ireton", "5/28/2020", "269.87"],
    ["08-769-4484", "Ryan Neises", "9/23/2020", "172.23"],
    ["27-807-4444", "Ryan Neises", "9/29/2020", "460.91"],
    ["74-460-1922", "Matthew Ireton", "10/8/2020", "602.48"],
    ["58-467-4321", "Matthew Ireton", "8/30/2020", "805.92"],
    ["61-185-3291", "Grant Brown", "8/4/2020", "711.18"],
    ["39-748-3281", "Johnny Reagan", "7/3/2020", "58.27"],
    ["99-771-9626", "Johnny Reagan", "4/17/2020", "839.44"],
    ["10-428-8576", "Grant Brown", "4/9/2020", "97.26"],
    ["69-691-1255", "Mitch Manders", "2/21/2020", "558.22"],
    ["85-133-4659", "Ryan Neises", "9/3/2020", "585.58"],
    ["33-560-8490", "Mitch Manders", "4/9/2020", "265.56"],
    ["66-517-3732", "Ryan Neises", "7/16/2020", "600.51"],
    ["46-900-0085", "Matthew Ireton", "3/19/2020", "98.93"],
    ["52-609-7221", "Matthew Ireton", "5/13/2020", "222.70"],
    ["10-229-0107", "Johnny Reagan", "12/1/2019", "659.07"],
    ["28-357-7203", "Matthew Ireton", "8/29/2019", "609.18"],
    ["87-696-4597", "Ryan Neises", "11/28/2019", "753.35"],
    ["75-799-2857", "Mitch Manders", "4/8/2020", "738.77"],
    ["68-976-5885", "Mitch Manders", "11/19/2019", "644.02"],
    ["82-305-5350", "Matthew Ireton", "1/3/2020", "253.30"],
    ["81-148-0155", "Johnny Reagan", "11/2/2019", "456.67"],
    ["88-922-2541", "Ryan Neises", "2/6/2020", "810.52"],
    ["62-836-3359", "Johnny Reagan", "11/4/2019", "97.24"],
    ["43-051-0671", "Matthew Ireton", "8/8/2020", "490.91"],
    ["02-110-8227", "Tim Langer", "11/21/2019", "693.43"],
    ["63-884-5862", "Grant Brown", "5/8/2020", "827.69"],
    ["31-081-4481", "Tim Langer", "11/24/2019", "808.71"],
    ["35-466-6866", "Ryan Neises", "7/14/2020", "195.92"],
    ["71-245-5684", "Ryan Neises", "9/30/2019", "367.21"],
    ["42-786-8126", "Ryan Neises", "7/19/2020", "756.85"],
    ["17-801-9547", "Ryan Neises", "10/18/2019", "179.76"],
    ["15-906-6867", "Grant Brown", "9/4/2020", "800.50"],
    ["00-661-8168", "Johnny Reagan", "1/22/2020", "694.47"],
    ["24-681-5129", "Mitch Manders", "9/9/2019", "372.52"],
    ["44-698-6534", "Tim Langer", "9/8/2019", "355.17"],
    ["36-568-2103", "Tim Langer", "2/25/2020", "608.79"],
    ["34-637-6627", "Matthew Ireton", "1/14/2020", "523.72"],
    ["51-921-4580", "Mitch Manders", "6/22/2020", "549.72"],
    ["85-572-7439", "Tim Langer", "9/11/2019", "410.11"],
    ["90-608-4916", "Grant Brown", "2/2/2020", "339.42"],
    ["72-479-4080", "Mitch Manders", "1/17/2020", "515.44"],
    ["11-480-9966", "Matthew Ireton", "3/2/2020", "653.16"],
    ["24-214-5000", "Matthew Ireton", "7/3/2020", "804.00"],
    ["11-517-4222", "Mitch Manders", "6/1/2020", "515.04"],
    ["80-532-1903", "Matthew Ireton", "1/12/2020", "247.32"],
    ["00-791-4751", "Tim Langer", "1/25/2020", "389.17"],
    ["79-566-3926", "Grant Brown", "10/25/2019", "356.52"],
    ["03-881-2221", "Matthew Ireton", "4/18/2020", "858.66"],
    ["79-201-1683", "Matthew Ireton", "11/4/2019", "524.04"],
    ["29-582-9633", "Tim Langer", "6/21/2020", "184.83"],
    ["11-413-5061", "Matthew Ireton", "5/31/2020", "618.00"],
    ["53-599-8870", "Tim Langer", "7/23/2020", "710.95"],
    ["37-019-2483", "Ryan Neises", "9/28/2020", "44.27"],
    ["42-771-0508", "Mitch Manders", "11/8/2019", "210.17"],
    ["93-443-7620", "Johnny Reagan", "5/18/2020", "941.74"],
    ["73-428-8304", "Matthew Ireton", "2/12/2020", "171.59"],
    ["11-260-6281", "Grant Brown", "10/12/2019", "371.89"],
    ["13-255-4757", "Tim Langer", "3/21/2020", "533.74"],
    ["25-396-7816", "Matthew Ireton", "9/20/2019", "570.42"],
    ["60-323-3430", "Tim Langer", "9/18/2020", "199.12"],
    ["47-944-9034", "Grant Brown", "8/28/2020", "168.98"],
    ["35-857-4650", "Matthew Ireton", "10/9/2019", "809.77"],
    ["72-271-0329", "Johnny Reagan", "7/26/2020", "548.79"],
    ["49-216-5141", "Grant Brown", "11/16/2019", "137.84"],
    ["77-906-3241", "Matthew Ireton", "7/26/2020", "311.33"],
    ["01-668-9525", "Mitch Manders", "6/19/2020", "491.82"],
    ["98-585-9669", "Tim Langer", "3/14/2020", "505.24"],
    ["09-688-0511", "Mitch Manders", "9/16/2019", "962.87"],
    ["76-457-1076", "Johnny Reagan", "10/30/2019", "235.45"],
    ["36-211-0449", "Grant Brown", "7/26/2020", "153.34"],
    ["84-430-1890", "Johnny Reagan", "9/23/2020", "304.13"],
    ["95-504-1163", "Ryan Neises", "1/6/2020", "324.41"],
    ["00-109-9027", "Mitch Manders", "6/28/2020", "775.24"],
    ["72-046-0106", "Johnny Reagan", "3/2/2020", "575.46"],
    ["86-355-2298", "Johnny Reagan", "2/19/2020", "87.48"],
    ["28-333-8073", "Grant Brown", "11/11/2019", "636.68"],
    ["74-739-9687", "Tim Langer", "7/11/2020", "284.50"],
    ["30-376-6284", "Grant Brown", "4/30/2020", "493.72"],
    ["22-509-9115", "Johnny Reagan", "9/25/2019", "384.95"],
    ["96-317-9872", "Ryan Neises", "1/23/2020", "943.56"],
    ["14-366-2138", "Ryan Neises", "2/12/2020", "172.89"],
    ["41-198-8705", "Grant Brown", "11/17/2019", "405.91"],
    ["19-542-4695", "Mitch Manders", "3/15/2020", "632.48"],
    ["34-591-7587", "Ryan Neises", "1/21/2020", "702.36"],
    ["62-288-1711", "Tim Langer", "1/30/2020", "189.75"],
    ["56-304-7425", "Ryan Neises", "9/5/2019", "283.85"],
    ["85-089-0555", "Grant Brown", "4/28/2020", "318.01"],
    ["46-886-4666", "Mitch Manders", "9/29/2020", "432.62"],
    ["81-629-9703", "Grant Brown", "2/18/2020", "530.14"],
    ["54-335-3325", "Mitch Manders", "10/21/2019", "399.33"],
    ["98-501-0266", "Matthew Ireton", "11/9/2019", "86.64"],
    ["40-840-9960", "Matthew Ireton", "9/8/2019", "561.01"],
    ["11-290-6915", "Johnny Reagan", "6/2/2020", "765.44"],
    ["55-779-9158", "Johnny Reagan", "6/27/2020", "524.27"],
    ["60-695-8676", "Matthew Ireton", "3/7/2020", "135.16"],
    ["01-339-6899", "Matthew Ireton", "12/5/2019", "279.15"],
    ["54-281-0859", "Mitch Manders", "9/30/2020", "244.05"],
    ["12-893-7471", "Matthew Ireton", "7/3/2020", "873.81"],
    ["65-631-8347", "Mitch Manders", "6/5/2020", "579.44"],
    ["45-620-9064", "Ryan Neises", "4/23/2020", "180.77"],
    ["80-520-6628", "Grant Brown", "4/8/2020", "265.80"],
    ["93-516-9113", "Ryan Neises", "4/5/2020", "497.62"],
    ["92-692-6309", "Johnny Reagan", "1/16/2020", "428.71"],
    ["02-920-3463", "Ryan Neises", "9/5/2019", "928.25"],
    ["75-024-5097", "Mitch Manders", "9/27/2020", "340.86"],
    ["92-509-0199", "Grant Brown", "8/6/2020", "48.86"],
    ["03-530-6984", "Grant Brown", "5/30/2020", "122.78"],
    ["14-902-0828", "Matthew Ireton", "6/25/2020", "210.89"],
    ["35-876-7119", "Grant Brown", "10/19/2019", "675.14"],
    ["64-209-3194", "Mitch Manders", "11/28/2019", "134.92"],
    ["19-237-7818", "Grant Brown", "9/5/2019", "356.91"],
    ["48-885-0769", "Matthew Ireton", "9/20/2020", "173.89"],
    ["86-494-7544", "Mitch Manders", "8/5/2020", "809.06"],
    ["54-271-5913", "Tim Langer", "2/10/2020", "201.94"],
    ["47-840-4909", "Johnny Reagan", "9/11/2020", "895.20"],
    ["49-068-2454", "Mitch Manders", "8/17/2020", "517.41"],
    ["02-076-2277", "Ryan Neises", "7/6/2020", "971.88"],
    ["97-668-7832", "Tim Langer", "4/28/2020", "272.71"],
    ["40-092-6037", "Mitch Manders", "10/11/2019", "694.29"],
    ["67-715-1573", "Matthew Ireton", "11/29/2019", "308.53"],
    ["08-111-6836", "Grant Brown", "4/3/2020", "267.49"],
    ["68-153-9208", "Ryan Neises", "11/2/2019", "839.72"],
    ["50-108-7719", "Tim Langer", "4/2/2020", "296.26"],
    ["69-599-9926", "Johnny Reagan", "9/17/2019", "85.13"],
    ["82-776-1151", "Matthew Ireton", "11/22/2019", "902.96"],
    ["56-025-8058", "Grant Brown", "7/14/2020", "385.93"],
    ["69-308-7536", "Ryan Neises", "10/24/2019", "871.50"],
    ["50-394-5375", "Johnny Reagan", "2/20/2020", "499.51"],
    ["21-996-3503", "Ryan Neises", "5/28/2020", "800.84"],
    ["02-030-1698", "Grant Brown", "5/6/2020", "566.21"],
    ["98-581-3697", "Tim Langer", "8/18/2019", "312.72"],
    ["45-299-4654", "Johnny Reagan", "3/12/2020", "431.07"],
    ["99-671-2933", "Johnny Reagan", "6/17/2020", "577.72"],
    ["31-479-3759", "Grant Brown", "9/2/2019", "909.86"],
    ["88-383-3181", "Ryan Neises", "5/11/2020", "856.90"],
    ["52-151-8258", "Grant Brown", "12/16/2019", "412.95"],
    ["01-933-3838", "Grant Brown", "6/12/2020", "444.96"],
    ["31-290-6541", "Ryan Neises", "10/17/2019", "170.57"],
    ["89-954-5694", "Mitch Manders", "9/9/2020", "921.48"],
    ["52-765-8516", "Grant Brown", "8/4/2020", "543.18"],
    ["90-958-0984", "Mitch Manders", "9/7/2019", "624.42"],
    ["97-386-1626", "Matthew Ireton", "4/23/2020", "697.03"],
    ["17-850-4747", "Tim Langer", "9/22/2020", "747.43"],
    ["81-557-6156", "Mitch Manders", "6/19/2020", "817.63"],
    ["59-103-9734", "Johnny Reagan", "8/17/2019", "940.61"],
    ["09-605-1621", "Ryan Neises", "10/10/2020", "349.04"],
    ["86-449-9947", "Mitch Manders", "5/30/2020", "382.90"],
    ["21-645-8692", "Grant Brown", "5/30/2020", "59.10"],
    ["70-857-2307", "Tim Langer", "1/4/2020", "409.53"],
    ["75-820-7156", "Ryan Neises", "12/31/2019", "592.30"],
    ["75-725-3770", "Tim Langer", "11/3/2019", "686.18"],
    ["44-593-2755", "Matthew Ireton", "4/23/2020", "649.80"],
    ["04-063-1217", "Tim Langer", "7/28/2020", "38.61"],
    ["50-997-0901", "Grant Brown", "1/26/2020", "574.24"],
    ["76-195-1645", "Mitch Manders", "12/23/2019", "142.99"],
    ["45-249-4909", "Grant Brown", "1/15/2020", "67.95"],
    ["30-455-4812", "Mitch Manders", "2/15/2020", "619.85"],
    ["03-594-3533", "Mitch Manders", "8/21/2020", "402.24"],
    ["45-399-3973", "Ryan Neises", "5/29/2020", "406.48"],
    ["30-011-8910", "Matthew Ireton", "8/21/2020", "989.52"],
    ["59-101-4924", "Matthew Ireton", "9/1/2019", "319.77"],
    ["32-440-1449", "Grant Brown", "5/11/2020", "951.61"],
    ["34-479-2648", "Mitch Manders", "1/18/2020", "920.37"],
    ["18-412-4975", "Tim Langer", "9/2/2020", "484.34"],
    ["48-254-7241", "Matthew Ireton", "8/29/2019", "69.37"],
    ["05-778-8744", "Ryan Neises", "10/5/2019", "597.53"],
    ["48-812-1673", "Grant Brown", "5/23/2020", "83.95"],
    ["31-952-3744", "Matthew Ireton", "9/18/2019", "440.54"],
    ["97-590-5698", "Grant Brown", "5/25/2020", "487.34"],
    ["48-623-1002", "Matthew Ireton", "12/18/2019", "217.38"],
    ["57-128-2483", "Tim Langer", "5/30/2020", "555.82"],
    ["91-785-3937", "Matthew Ireton", "3/8/2020", "263.62"],
    ["75-009-6348", "Johnny Reagan", "2/18/2020", "429.51"],
    ["04-382-1883", "Ryan Neises", "11/9/2019", "81.40"],
    ["41-479-3859", "Johnny Reagan", "11/3/2019", "364.31"],
    ["26-737-2119", "Mitch Manders", "3/30/2020", "283.45"],
    ["15-933-3858", "Johnny Reagan", "10/9/2019", "684.92"],
    ["17-160-7041", "Ryan Neises", "1/10/2020", "722.40"],
    ["98-531-8331", "Grant Brown", "9/24/2019", "752.86"],
    ["34-948-7211", "Grant Brown", "9/16/2019", "931.83"],
    ["78-302-8641", "Mitch Manders", "9/25/2019", "465.37"],
    ["34-840-0560", "Johnny Reagan", "2/21/2020", "224.65"],
    ["55-138-1942", "Grant Brown", "10/6/2020", "219.13"],
    ["77-383-3004", "Tim Langer", "1/25/2020", "502.04"],
    ["87-544-6431", "Matthew Ireton", "12/14/2019", "370.44"],
    ["37-449-4909", "Johnny Reagan", "9/12/2020", "952.57"],
    ["58-271-5260", "Grant Brown", "7/16/2020", "543.85"],
    ["86-107-3608", "Tim Langer", "5/27/2020", "557.03"],
    ["60-372-3153", "Mitch Manders", "11/20/2019", "313.72"],
    ["52-004-2597", "Ryan Neises", "2/28/2020", "843.38"],
    ["04-620-3369", "Grant Brown", "8/18/2019", "546.05"],
    ["74-524-3547", "Johnny Reagan", "1/21/2020", "230.79"],
    ["43-977-0344", "Johnny Reagan", "1/30/2020", "514.60"],
    ["87-907-0220", "Tim Langer", "5/18/2020", "317.67"],
    ["83-204-5601", "Tim Langer", "9/1/2020", "681.90"],
    ["44-025-0844", "Ryan Neises", "7/31/2020", "814.65"],
    ["97-092-7555", "Matthew Ireton", "11/28/2019", "523.19"],
    ["52-640-9389", "Matthew Ireton", "9/2/2019", "833.71"],
    ["32-783-5050", "Tim Langer", "11/10/2019", "371.62"],
    ["40-946-2212", "Matthew Ireton", "11/22/2019", "594.71"],
    ["83-606-4403", "Ryan Neises", "3/19/2020", "902.11"],
    ["99-576-3294", "Matthew Ireton", "10/16/2019", "266.20"],
    ["37-605-7984", "Grant Brown", "8/28/2020", "767.79"],
    ["24-824-7559", "Mitch Manders", "3/4/2020", "123.07"],
    ["35-081-7742", "Ryan Neises", "6/29/2020", "973.05"],
    ["54-932-8698", "Ryan Neises", "11/28/2019", "889.33"],
    ["71-990-4783", "Grant Brown", "11/28/2019", "120.67"],
    ["44-666-4277", "Grant Brown", "10/10/2020", "980.26"],
    ["57-994-9256", "Johnny Reagan", "1/29/2020", "492.10"],
    ["90-165-5216", "Grant Brown", "8/30/2019", "946.56"],
    ["04-888-2844", "Johnny Reagan", "12/26/2019", "273.38"],
    ["18-288-0517", "Grant Brown", "6/12/2020", "588.18"],
    ["07-436-0292", "Grant Brown", "7/17/2020", "309.49"],
    ["99-439-3555", "Grant Brown", "7/17/2020", "760.33"],
    ["67-369-5402", "Matthew Ireton", "3/29/2020", "244.82"],
    ["40-642-6965", "Tim Langer", "6/29/2020", "591.51"],
    ["31-647-4857", "Grant Brown", "7/23/2020", "197.03"],
    ["16-040-8555", "Tim Langer", "6/22/2020", "755.09"],
    ["64-657-8694", "Matthew Ireton", "10/2/2019", "62.02"],
    ["87-247-2653", "Grant Brown", "10/6/2020", "536.17"],
    ["93-132-0228", "Tim Langer", "7/22/2020", "604.31"],
    ["55-121-9493", "Grant Brown", "4/25/2020", "66.64"],
    ["89-285-4425", "Ryan Neises", "12/23/2019", "801.30"],
    ["37-225-5770", "Grant Brown", "10/31/2019", "312.51"],
    ["24-072-1443", "Matthew Ireton", "7/24/2020", "587.75"],
    ["18-363-8859", "Grant Brown", "4/21/2020", "472.95"],
    ["86-584-8443", "Tim Langer", "8/12/2020", "509.93"],
    ["61-239-4300", "Johnny Reagan", "9/19/2020", "285.16"],
    ["93-201-8363", "Matthew Ireton", "4/25/2020", "115.92"],
    ["83-979-6338", "Matthew Ireton", "4/2/2020", "595.31"],
    ["49-903-5658", "Mitch Manders", "7/18/2020", "503.35"],
    ["15-088-5658", "Grant Brown", "10/20/2019", "97.02"],
    ["14-278-3072", "Johnny Reagan", "12/23/2019", "839.45"],
    ["53-073-0162", "Matthew Ireton", "9/29/2019", "894.12"],
    ["65-535-0704", "Mitch Manders", "12/30/2019", "647.96"],
    ["70-324-2188", "Matthew Ireton", "10/3/2020", "161.90"],
    ["70-934-3761", "Matthew Ireton", "1/29/2020", "21.21"],
    ["97-892-4686", "Grant Brown", "2/28/2020", "997.55"],
    ["13-173-8974", "Matthew Ireton", "9/12/2020", "469.30"],
    ["50-369-8209", "Ryan Neises", "9/19/2019", "985.81"],
    ["47-526-4143", "Grant Brown", "1/14/2020", "572.85"],
    ["78-586-4180", "Grant Brown", "8/3/2020", "923.84"],
    ["20-011-9414", "Ryan Neises", "10/3/2020", "458.63"],
    ["85-419-7144", "Mitch Manders", "7/19/2020", "550.79"],
    ["97-740-0467", "Johnny Reagan", "1/22/2020", "685.28"],
    ["40-541-8407", "Matthew Ireton", "4/23/2020", "917.95"],
    ["53-149-2028", "Mitch Manders", "9/6/2020", "75.07"],
    ["91-103-2358", "Matthew Ireton", "10/4/2020", "764.98"],
    ["33-810-4479", "Johnny Reagan", "2/21/2020", "390.89"],
    ["83-097-7135", "Ryan Neises", "1/1/2020", "76.29"],
    ["84-441-5411", "Johnny Reagan", "12/8/2019", "171.19"],
    ["13-416-0207", "Matthew Ireton", "2/15/2020", "320.14"],
    ["83-007-9827", "Ryan Neises", "9/26/2019", "122.18"],
    ["33-256-4820", "Matthew Ireton", "7/9/2020", "879.41"],
    ["76-585-8706", "Johnny Reagan", "3/20/2020", "637.63"],
    ["61-369-0784", "Ryan Neises", "10/10/2019", "491.12"],
    ["22-805-8736", "Mitch Manders", "7/28/2020", "794.06"],
    ["44-783-3105", "Matthew Ireton", "9/14/2020", "482.00"],
    ["88-464-4056", "Matthew Ireton", "6/12/2020", "559.71"],
    ["16-331-9464", "Johnny Reagan", "12/18/2019", "226.97"],
    ["90-818-2728", "Matthew Ireton", "9/21/2019", "715.79"],
    ["86-755-3437", "Grant Brown", "7/8/2020", "605.41"],
    ["49-268-0233", "Johnny Reagan", "6/13/2020", "102.20"],
    ["01-437-2836", "Mitch Manders", "6/9/2020", "421.30"],
    ["51-475-7389", "Matthew Ireton", "12/29/2019", "994.27"],
    ["21-487-0697", "Johnny Reagan", "6/27/2020", "360.73"],
    ["75-521-9129", "Tim Langer", "4/27/2020", "386.12"],
    ["40-189-8294", "Mitch Manders", "12/3/2019", "745.77"],
    ["71-441-5483", "Matthew Ireton", "8/6/2020", "71.85"],
    ["63-063-4899", "Ryan Neises", "4/16/2020", "579.32"],
    ["80-517-3560", "Grant Brown", "4/17/2020", "290.25"],
    ["22-624-1938", "Ryan Neises", "1/26/2020", "186.85"],
    ["02-610-2998", "Johnny Reagan", "2/22/2020", "734.40"],
    ["24-378-6335", "Grant Brown", "2/21/2020", "371.95"],
    ["34-853-8595", "Ryan Neises", "1/12/2020", "477.91"],
    ["74-796-3162", "Mitch Manders", "12/20/2019", "751.97"],
    ["62-232-9150", "Ryan Neises", "3/28/2020", "768.84"],
    ["62-705-6192", "Mitch Manders", "6/17/2020", "27.14"],
    ["03-957-3195", "Johnny Reagan", "9/16/2020", "32.76"],
    ["57-214-0788", "Johnny Reagan", "6/18/2020", "427.26"],
    ["72-212-6973", "Grant Brown", "8/21/2020", "881.22"],
    ["06-978-1168", "Matthew Ireton", "12/7/2019", "432.32"],
    ["14-006-7947", "Matthew Ireton", "2/28/2020", "124.08"],
    ["69-553-7320", "Ryan Neises", "5/1/2020", "286.70"],
    ["07-685-5543", "Grant Brown", "2/15/2020", "473.61"],
    ["46-863-8428", "Mitch Manders", "2/17/2020", "23.73"],
    ["34-011-6078", "Tim Langer", "9/12/2020", "505.06"],
    ["04-446-7103", "Grant Brown", "9/26/2020", "401.21"],
    ["30-578-6798", "Ryan Neises", "9/18/2019", "656.82"],
    ["58-043-8934", "Ryan Neises", "2/24/2020", "841.81"],
    ["44-512-0349", "Mitch Manders", "7/9/2020", "321.99"],
    ["97-974-0979", "Johnny Reagan", "8/6/2020", "327.92"],
    ["61-814-1261", "Grant Brown", "5/30/2020", "202.62"],
    ["23-570-9880", "Grant Brown", "1/19/2020", "974.09"],
    ["31-209-5697", "Johnny Reagan", "10/4/2020", "211.47"]
];
let randomPO1 = '';
let randomPO2 = '';
let randomPO3 = '';
let randomPO4 = '';
let randomPO5 = '';
let randomPO6 = '';
let randomPO7 = '';
var startTime, endTime;


// Below function Executes on click of login button.
function validate() {
    //increment submitcount
    submitCount++;
    let currentSubmission = 0;

    //Get the value for all fields
    //var purchaseOrder1 = document.getElementById("employeeID").value;
    var shipDate1 = document.getElementById("shipDate1").value;
    var orderTotal1 = document.getElementById("orderTotal1").value;
    var agent1 = document.getElementById("agent1").value;

    var shipDate2 = document.getElementById("shipDate2").value;
    var orderTotal2 = document.getElementById("orderTotal2").value;
    var agent2 = document.getElementById("agent2").value;

    var shipDate3 = document.getElementById("shipDate3").value;
    var orderTotal3 = document.getElementById("orderTotal3").value;
    var agent3 = document.getElementById("agent3").value;

    var shipDate4 = document.getElementById("shipDate4").value;
    var orderTotal4 = document.getElementById("orderTotal4").value;
    var agent4 = document.getElementById("agent4").value;

    var shipDate5 = document.getElementById("shipDate5").value;
    var orderTotal5 = document.getElementById("orderTotal5").value;
    var agent5 = document.getElementById("agent5").value;

    var shipDate6 = document.getElementById("shipDate6").value;
    var orderTotal6 = document.getElementById("orderTotal6").value;
    var agent6 = document.getElementById("agent6").value;

    var shipDate7 = document.getElementById("shipDate7").value;
    var orderTotal7 = document.getElementById("orderTotal7").value;
    var agent7 = document.getElementById("agent7").value;

    //PO1
    if (shipDate1 == rows[randomPO1][2]) {
        numCorrect++;
    };
    if (orderTotal1 == rows[randomPO1][3]) {
        numCorrect++;
    };
    if (agent1 == rows[randomPO1][1]) {
        numCorrect++;
    }

    //PO2
    if (shipDate2 == rows[randomPO2][2]) {
        numCorrect++;
    };
    if (orderTotal2 == rows[randomPO2][3]) {
        numCorrect++;
    };
    if (agent2 == rows[randomPO2][1]) {
        numCorrect++;
    }

    //PO3
    if (shipDate3 == rows[randomPO3][2]) {
        numCorrect++;
    };
    if (orderTotal3 == rows[randomPO3][3]) {
        numCorrect++;
    };
    if (agent3 == rows[randomPO3][1]) {
        numCorrect++;
    }

    //PO4
    if (shipDate4 == rows[randomPO4][2]) {
        numCorrect++;
    };
    if (orderTotal4 == rows[randomPO4][3]) {
        numCorrect++;
    };
    if (agent4 == rows[randomPO4][1]) {
        numCorrect++;
    }

    //PO5
    if (shipDate5 == rows[randomPO5][2]) {
        numCorrect++;
    };
    if (orderTotal5 == rows[randomPO5][3]) {
        numCorrect++;
    };
    if (agent5 == rows[randomPO5][1]) {
        numCorrect++;
    }

    //PO6
    if (shipDate6 == rows[randomPO6][2]) {
        numCorrect++;
    };
    if (orderTotal6 == rows[randomPO6][3]) {
        numCorrect++;
    };
    if (agent6 == rows[randomPO6][1]) {
        numCorrect++;
    }

    //PO7
    if (shipDate7 == rows[randomPO7][2]) {
        numCorrect++;
    };
    if (orderTotal7 == rows[randomPO7][3]) {
        numCorrect++;
    };
    if (agent7 == rows[randomPO7][1]) {
        numCorrect++;
    }

    //All have been submitted - calculate score
    endTime = Date.now();
    c = (Math.abs(endTime-startTime)/1000).toFixed(3);

    //Disable submit button
    document.getElementById('submitbutton').disabled = true;
    
    score = (numCorrect / totalPossible * 100).toFixed(2);
    if (score == 100) {
        document.querySelector('.modal-title').innerHTML = 'Awesome! Supply Chain Management Challege Complete';
        // document.querySelector('#shareonsocial').innerHTML = '<h5 class="mx-auto" style="text-align: center;"> Take a screenshot and <a href="http://twitter.com/intent/tweet?text=I%20just%20completed%20the%20%40AutomationAnywh%20Supply%20Chain%20Management%20RPA%20Challenge%20as%20a%20part%20of%20%23BotGames%202021.%20Can%20you%20complete%20the%20challenge%3F%20Try%20it%20here%3A%20https%3A%2F%2Fbit.ly%2F3wNyyc3%20%23RPA%20%23CloudRPA%20%23100DaysofCode%20%23Developer%20%23RPAugust" target="_blank" rel="noopener noreferrer"> share your accomplishment </a> on social media!</h5>';
        document.querySelector('.material-icons').innerHTML = '&#xE876;';
        document.getElementById('btn-modal').style.backgroundColor = '#6fb32b';
        document.getElementById('icon-box').style.backgroundColor = '#6fb32b';
        document.getElementById('accuracy-head').style.backgroundColor = '#6fb32b';
        document.getElementById('processing-time-head').style.backgroundColor = '#6fb32b';
    } else if (numCorrect == 0) {
        document.querySelector('.modal-title').textContent = 'Try Again. It looks like no fields were filled correctly.'
        document.querySelector('.material-icons').innerHTML = 'error_outline';
        document.getElementById('btn-modal').style.backgroundColor = 'red';
        document.getElementById('icon-box').style.backgroundColor = 'red';
        document.getElementById('accuracy-head').style.backgroundColor = 'red';
        document.getElementById('processing-time-head').style.backgroundColor = 'red';
        //document.querySelector('#accuracy-head').style = 'background-color: red'
        //document.querySelector('#processing-time-head').style = 'background-color: red'
        score = 0;
    } else {
        document.querySelector('.modal-title').textContent = 'Good Try, you got ' + numCorrect + ' out of 21 correct. Be sure that you strip out any $ before entering the order total!'
        document.querySelector('.icon-box').style = 'background-color: orange'
        document.querySelector('.material-icons').innerHTML = 'error_outline';
        document.getElementById('btn-modal').style.backgroundColor = 'orange';
        document.getElementById('icon-box').style.backgroundColor = 'orange';
        document.getElementById('accuracy-head').style.backgroundColor = 'orange';
        document.getElementById('processing-time-head').style.backgroundColor = 'orange';
    }

    //Show Results
    document.querySelector('#processing-time').textContent = c + ' seconds'
    document.querySelector('#accuracy').textContent = score + '%'

    $('#myModal').modal()






}

//Starts the timer
function startCount() {
    setPOs();
    startTime = Date.now();
}


//Set the Row & Column values
function setPOs() {
    randomPO1 = Math.floor(Math.random() * 298);
    document.querySelector('#PONumber1').value = rows[randomPO1][0];
    randomPO2 = Math.floor(Math.random() * 298);
    document.querySelector('#PONumber2').value = rows[randomPO2][0];
    randomPO3 = Math.floor(Math.random() * 298);
    document.querySelector('#PONumber3').value = rows[randomPO3][0];
    randomPO4 = Math.floor(Math.random() * 298);
    document.querySelector('#PONumber4').value = rows[randomPO4][0];
    randomPO5 = Math.floor(Math.random() * 298);
    document.querySelector('#PONumber5').value = rows[randomPO5][0];
    randomPO6 = Math.floor(Math.random() * 298);
    document.querySelector('#PONumber6').value = rows[randomPO6][0];
    randomPO7 = Math.floor(Math.random() * 298);
    document.querySelector('#PONumber7').value = rows[randomPO7][0];
};

//Invoke Toast with Result
function toast(message, outcome) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    x.innerHTML = message;

    //Set toast color
    if (outcome == true) {
        x.style.backgroundColor = "green";
    } else {
        x.style.backgroundColor = "red";
    }

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
