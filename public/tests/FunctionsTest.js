describe('1. Finding greatest number',()=>{
    it('My test cases',()=>{
        //arrange
        //act
        //assert
        expect(typeof greatestOfTwoNumbers).toBe('function');
        expect(greatestOfTwoNumbers(1,2)).toBe(2)
        expect(greatestOfTwoNumbers(-100,200)).toBe(200)
        expect(greatestOfTwoNumbers(-1,-2)).toBe(-1)
        expect(greatestOfTwoNumbers(0,-2)).toBe(0)
    })
  
  })
  
  describe('2. Finding scary word',()=>{
    it('My test cases',()=>{
        const words1 = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony','manoowranjithaj'];
        const words2 = [''];
        expect(typeof findScaryWord).toBe('function');
        expect(findScaryWord(words1)).toBe('manoowranjithaj')
        expect(findScaryWord(words2)).toBe('')
    })
  
  })
  
  
  describe('3. Net price',()=>{
    it('My test cases',()=>{
        const prices1 = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
        const prices2 = [1,1,1,1,1,1,-1]
        const prices3 = [-1.-1,-1]
        expect(typeof netPrice).toBe('function');
        expect(netPrice(prices1)).toBe(1210)
        expect(netPrice(prices2)).toBe(5)
        expect(netPrice(prices3)).toBe(-3)
    })
  
  })
  
  
  
  describe('3.1. Sum of array',()=>{
    it('My test cases',()=>{
      const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156]; 
      const single=[]
      expect(typeof sumOfArray).toBe('function');
      expect(sumOfArray(mixedArr)).toBe(463)
      expect(sumOfArray(single)).toBe(0)
    })
  
  })
  
  describe('4. Mid point ',()=>{
    it('My test cases',()=>{
      const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110]; 
      expect(typeof midPoint).toBe('function');
      expect(midPoint(prices)).toBe(121)
      expect(midPoint([0])).toBe(0)
    })
  
  })
  
  describe('4.1. Mid point of levels',()=>{
    it('My test cases',()=>{
      const levels = [22, 16, 9, 10, 7, 14, 11, 9]; 
      expect(typeof midPointOfLevels).toBe('function');
      expect(midPointOfLevels(levels)).toBe(12.25)
      expect(sumOfArray(0)).toBe(0)
    })
  
  })
  
  describe('4.2. Average word length',()=>{
    it('My test cases',()=>{
      const items = ['bread',  'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt' ]; 
      expect(typeof averageWordLength).toBe('function');
      expect(averageWordLength(items)).toBe(4.9)
      expect(sumOfArray(0)).toBe(0)
    })
  
  })
  
  describe('4.3. Average',()=>{
    it('My test cases',()=>{
      const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156]; 
      const mixedArr1 = ['1','2',false]; 
      expect(typeof avg).toBe('function');
      expect(avg(mixedArr)).toBe(46.3)
      expect(sumOfArray(mixedArr1)).toBe(2)
    })
  
  })
  
  describe('5. Unique arrays',()=>{
    it('My test cases',()=>{
      const items = [ 
  
        'bread', 
        
        'jam', 
        
        'milk', 
        
        'egg', 
        
        'flour', 
        
        'oil', 
        
        'rice', 
        
        'coffee powder', 
        
        'sugar', 
        
        'salt', 
        
        'egg', 
        
        'flour' 
        
    ]; 
      expect(typeof uniqueArrays).toBe('function');
       expect(uniqueArrays(items)).toEqual([
         'bread',
         'jam',
         'milk',
         'oil',
         'rice',
         'coffee powder',
         'sugar',
         'salt'
       ])
    })
  
  })
  
  describe('6. searchElement',()=>{
    it('My test cases',()=>{
      const words = [ 
  
        'door', 
        
        'window', 
        
        'ceiling', 
        
        'roof', 
        
        'plinth', 
        
        'tiles', 
        
        'ceiling', 
        
        'flooring' 
        
        ]
      expect(typeof searchElement).toBe('function');
      expect(searchElement(words,'roof')).toBe(true)
      expect(searchElement(['manoowranjith'])).toBe(false)
    })
  
  })
  
  describe('7. Repeated elements',()=>{
    it('My test cases',()=>{
      const words = [ 
  
        'machine', 
        
        'matter', 
        
        'subset', 
        
        'trouble', 
        
        'starting', 
        
        'matter', 
        
        'eating', 
        
        'matter', 
        
        'truth', 
        
        'disobedience', 
        
        'matter' 
        
        ]; 
      expect(typeof howManyTimesElementRepeated).toBe('function');
      expect(howManyTimesElementRepeated(words,'matter')).toBe(4)
      expect(howManyTimesElementRepeated(words,'disobedience')).toBe(1)
    })
  
  })
  
  describe('8. Maximum product od adjacent elements',()=>{
    it('My test cases',()=>{
      const array=[
        [ 1, 2, 3, 4, 5] ,
        
        [ 1, 25, 3, 4, 5] ,
        
        [ 1, 20, 3, 4, 5] ,
        
        [ 1, 20, 3, 4, 5] ,
        
        [ 1, 4, 3, 4, 5] 
        ]
        const array1=[
          [ 1, 2, 3, 4, 5] ,
          
          [ 1, 25, 3, 4, 5] ,
          
          [ 1, 20, 3, 4, 5] ,
          
          [ 1, 20, 3, 4, 5] 
          ]
      expect(typeof maximumProduct).toBe('function');
      expect(maximumProduct(array)).toBe(40000)
      expect(maximumProduct(array1)).toBe(10000)
      // expect(sumOfArray(mixedArr1)).toBe(2)
    })
  
  })
  
  describe('8.1. Maximum product of diagonal elements',()=>{
    it('My test cases',()=>{
      const array=[
        [08, 02, 22, 97, 38, 15, 00, 40, 00, 75], 
    
        [49, 49, 99, 40, 17, 81, 18, 57, 60, 87], 
        
        [81, 49, 31, 73, 55, 79, 14, 29, 93, 71], 
        
        [52, 70, 95, 23, 04, 60, 11, 42, 69, 24], 
        
        [22, 31, 16, 71, 51, 67, 63, 89, 41, 92], 
        
        [24, 47, 32, 60, 99, 03, 45, 02, 44, 75], 
        
        [32, 98, 81, 28, 64, 23, 67, 10, 26, 38], 
        
        [67, 26, 20, 68, 02, 62, 12, 20, 95, 63], 
        
        [24, 55, 58, 05, 66, 73, 99, 26, 97, 17], 
        
        [21, 36, 23, 09, 75, 00, 76, 44, 20, 45] 
    ]
  
    const array1=[
      [1,0,0,0],
      [0,2,0,0],
      [0,0,3,0],
      [0,0,0,4]
    ]
  
      expect(typeof maximumProductOfDiagonals).toBe('function');
      expect(maximumProductOfDiagonals(array)).toBe(29848500)
      expect(maximumProductOfDiagonals(array1)).toBe(24)
    })
  
  })
