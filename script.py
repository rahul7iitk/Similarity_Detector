#!/usr/bin/python
# -*- coding: utf-8 -*-
import sys
import pycode_similar

def main():
    
    filepath1 = './'+sys.argv[1]
    filepath2 = './'+sys.argv[2]
    
    f1 = open(filepath1,'r')
    f2 = open(filepath2,'r')
    
    results = pycode_similar.detect([f1.read(),f2.read()])
    result = 0

    for index, func_ast_diff_list in results:
        sum_total_count = sum(func_diff_info.total_count for func_diff_info in func_ast_diff_list)
        sum_plagiarism_count = sum(func_diff_info.plagiarism_count for func_diff_info in func_ast_diff_list)
        result = ('{:.2f} % ({}/{}) of ref code structure is plagiarized by candidate.'.format(sum_plagiarism_count / float(sum_total_count) * 100,sum_plagiarism_count,sum_total_count))
    
    print(result)
    sys.stdout.flush()


if __name__ == '__main__':
    main()